import React, { PropsWithChildren } from 'react';
import { NavLink } from "react-router";

interface Props {
  children: React.ReactNode;
  route: string;
}

export default function(props: PropsWithChildren<Props>){
  return (
    <NavLink className="tab" to={props.route}>
      <div className="link">{props.children}</div>
    </NavLink>
  );
}


