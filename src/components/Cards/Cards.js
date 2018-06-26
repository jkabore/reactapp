import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div onClick={() => props.handleClick(props.id)} className="card container  img-container">
      <div className="img-container zoom">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Cards;