import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {

  return (
    
    <div className = "card">
      <div className="header">{props.name}</div>
      <div className="type"> {props.type}</div>
      <div className="meta"> {props.dimension}</div>
      <div className="description">
        Residents: {props.residents}</div>
    </div>
  )
}
