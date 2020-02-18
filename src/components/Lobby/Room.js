import React from "react";

export default function Room(props) {
  return (
    <div className="roomItem">
      <div>{props.name}</div>
      <button className="joinRoom" onClick={() => props.joinClick(props.id)}>
        JOIN
      </button>
      <div>{props.users}</div>
    </div>
  );
}
