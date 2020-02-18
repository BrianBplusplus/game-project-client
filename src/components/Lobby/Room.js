import React from "react";

export default function Room(props) {
  return (
    <li>
      {props.name} <br></br>
      Ammount of player : 0<br></br>
      <button onClick={() => props.joinClick(props.id)}>Join room</button>
    </li>
  );
}
