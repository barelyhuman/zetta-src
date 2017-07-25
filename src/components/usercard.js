import React from "react";

export default function UserCard(props){
  return(
    <div className="usrcard" onClick={props.onClick}>
    <div className="usrcard-label">
    {props.name}</div>
    </div>
  );
}
