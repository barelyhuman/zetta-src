import React from "react";

export default function AlbumCard(props){
  return(
    <div className="album-card" onClick={props.onClick}>
    <div className="album-title">{props.title}</div>
    </div>
  );
}
