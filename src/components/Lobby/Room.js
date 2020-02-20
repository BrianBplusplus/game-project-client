import React from "react";

export default function Room(props) {
  return (
    <div className="roomItem">
      <div className="roomItemDetail">{props.name}</div>
      <div className="roomItemDetail">Players: {props.users}</div>
      <button className="joinRoom" onClick={() => props.joinClick(props.id)}>
        JOIN
      </button>
    </div>
  );
}
