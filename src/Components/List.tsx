import { PropsWithChildren } from 'react';
import ListItem from '../types/ListItem';

interface Props {
  items: ListItem[];
  style: boolean;
}

export default function List(props: PropsWithChildren<Props>){
  return (
    <ul className={props.style ? "" : "no-style"}>
      {props.items.map(item => (<li className='gray'>{item.icon ? <i className={item.icon} /> : null} {item.text}</li>))}
    </ul>
  );
}