import React, { JSX, PropsWithChildren } from 'react';
import {Code, Result, Text} from '../types/DocData';

interface Props {
  title: string;
  elements: (Text | Code)[];
}

export default function List(props: PropsWithChildren<Props>){
  const getCodeElement = (code: Code): JSX.Element => {
    return (
      <pre className='code'>
        <code className={'language-' + code.language}>
          {code.content}
        </code>
      </pre>
    )
  }
  return (<>
    <strong id={props.title.split(' ').join('-')}>{props.title + ' :'}</strong>
    <div className="code">
      {props.elements.map((element) => {
        let html: JSX.Element = (<p>error</p>)
        
        if(element.type === 'text'){
          html = (<p className='gray'>
            {element.content.map(text => (
                typeof text === 'string' ? text : <a className="blue-link" href={text.url} target="_blank">{text.name}</a>
              ))
            }
          </p>);
        } else if(element.type === 'code'){
          if(!!element.result){
            html = (
              <div className='align-result'>
                {getCodeElement(element)}
                <div>
                  <p>résultat : </p>
                  <div className={element.result.type}>
                    {!Array.isArray(element.result.content) ? element.result.content : element.result.content.map(line => <p>{line}</p>)}
                  </div>
                </div>
              </div>
            );
          } else {
            html = getCodeElement(element);
          }
        }

        return (<></>)
        })}
    </div>
  </>)
}