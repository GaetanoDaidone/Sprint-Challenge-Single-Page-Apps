import React from "react";


export default function EpisodeCard(props) {
  console.log(props);
  return (
 
      <div className="card">
          <div className="header">{props.name}</div>
          <div className="meta">airdate: {props.airDate}</div>
          <div className="description">episode #: {props.episode}</div>
        </div>
  );
}