import React from "react";

export default function Chatroom() {
  return (
    <div className="chatroom">
      Chatroom
      <div className="chatroomcanvas">text goes here</div>
      <div className="chatbuttonandinput">
        <input type="text"></input>
        <button>send</button>
      </div>
    </div>
  );
}
