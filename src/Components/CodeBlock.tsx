import { PropsWithChildren } from 'react';
import { Code } from '../types/DocData';

interface Props {
  code: Code;
}

export default function CodeBlock(props: PropsWithChildren<Props>){
  return (
    <pre className='code'>
      <code className={'language-' + props.code.language}>
        {props.code.content}
      </code>
    </pre>
  )
}