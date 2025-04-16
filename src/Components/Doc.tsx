import { JSX, PropsWithChildren } from 'react';
import {Code, ConsoleResult, WebResult, Text} from '../types/DocData';
import CodeBlock from './CodeBlock';
import ResultBlock from './ResultBlock';

interface Props {
  title: string;
  elements: (Text | Code)[];
}

export default function Doc(props: PropsWithChildren<Props>){

  return (<>
    <strong id={props.title.split(' ').join('-')}>{props.title + ' :'}</strong>
    <div className="code">
      {props.elements.map((element) => {
        let html: JSX.Element = (<p>error</p>)
        
        if(element.type === 'text'){
          html = (<p className='gray'>
            {element.content.map(text => (
                typeof text === 'string' ? text : <a className="blue-link" href={text.url} target="_blank">{text.name ?? text.url}</a>
              ))
            }
          </p>);
        } else if(element.type === 'code'){
          if(!!element.result){
            const css: Code | undefined = (element.result.type == 'web' ? element.result.css : undefined)
            html = (
              <>
              {css ? <CodeBlock code={css} /> : null}
              <div className='align-result'>
                <CodeBlock code={element} />
                <ResultBlock code={element as Code & { result: ConsoleResult | WebResult}} />
              </div>
              </>
            );
          } else {
            html = (<CodeBlock code={element} />);
          }
        }

        return (html)
        })}
    </div>
  </>)
}