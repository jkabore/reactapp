import React from 'react';
import "./Header.css";


const Header = (props)=> (
  <div className="header">
  {props.children}
  <div className="scores">
    score: {props.score} /
    final score: {props.finalScore}
    
  </div>
  <div className="message">
  {props.message}
  </div>
  <div className="title" style={{textAlign:"center"}}>
{props.title}

</div>
</div>
    
);

export default Header;