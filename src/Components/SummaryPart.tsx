import React, { PropsWithChildren } from 'react';

interface Props {
  children?: React.ReactNode;
  parts: string[],
}

export default function SummaryPart(props: PropsWithChildren<Props>){
  return (
    <>
    <strong>{props.children}</strong>
    <div className='parts'>
      {props.parts.map((part) => (<a href={`#${part.split(' ').join('-')}`}>{part}</a>))}
    </div>
    </>
  )
}