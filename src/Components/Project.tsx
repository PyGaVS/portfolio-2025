import React, { PropsWithChildren } from 'react';

interface Props {
  children?: React.ReactNode;
  title : string;
  id?: string;
  images: {source: string, width: number}[];
}

export default function Project(props: PropsWithChildren<Props>){
  return (
    <details>
      <summary id={props.id}>{props.title}</summary>
      {props.children}
      <div className='row'>
        {props.images.map(img => (<img src={img.source} alt='project pic' width={img.width + 'px'}/>))}
      </div>
    </details>
  );
}