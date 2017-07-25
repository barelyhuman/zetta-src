import React from "react";

export default function ImageCard(props){
  return(
    <div className="imgcard"><img className="imgcard-img" src={props.url}/></div>
  );
}
