import { PropsWithChildren, useRef, useEffect } from 'react';
import { Code, ConsoleResult, WebResult } from '../types/DocData';
import DOMPurify from 'dompurify';

interface Props {
  code: Code & { result: ConsoleResult | WebResult};
}

export default function ResultBlock({ code }: PropsWithChildren<Props>){

  if(!code.result.content && code.result.type == 'web'){
    let fullHtml = code.content
    if(code.result.css){
      fullHtml =` 
<style>
${code.result.css.content}
</style>
${fullHtml}
      `
      
    }
    const clean = DOMPurify.sanitize(fullHtml)
    console.log(clean)
      return (
        <div>
          <p>result : </p>
          <iframe className='web' srcDoc={fullHtml}/>
        </div>
      );
  } else {
    return (
      <div>
        <p>result : </p>
        <div className={code.result.type}>
          {code.result.type == 'web' ? code.result.content : code.result.content.map(line => <p>{line}</p>)}
        </div>
      </div>
    );
  }
}