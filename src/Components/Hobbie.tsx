import React, { PropsWithChildren } from 'react';

interface Props {
  children?: React.ReactNode;
  img: string;
  title: string;
}

export default function Hobbie(props: PropsWithChildren<Props>){
  return (
    <div className='hobbie-card'> 
      <img src={props.img} alt={props.title} />
      <p className="gray">{props.title}</p>
      {props.children}
    </div>
  )
}