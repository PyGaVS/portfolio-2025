import React, { Children, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  children: React.ReactNode;
}

export default function Header(props: PropsWithChildren<Props>){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  return (
    <div className="tab-head">
        <div className="home-button-shadow">
            <div className="home-button" onClick={handleClick}>
                <p><i className="fa-solid fa-arrow-left-long"></i></p>
            </div>
        </div>
        <strong className="title">{props.children}</strong>
    </div>
  )
}