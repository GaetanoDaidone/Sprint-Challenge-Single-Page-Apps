import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <div className="charImage">
        <img src={props.image} />
      </div>
      <div className="header">{props.name}</div>
      <div className="meta">
        <span className="date">{props.species}</span>
        <span className="date">{props.status}</span>
      </div>
    </div>

  )



}
