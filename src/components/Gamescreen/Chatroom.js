import React, { Component } from "react";

export default class Chatroom extends Component {
  render() {
    return (
      <div className="chatroom">
        Chatroom
        <div className="chatroomcanvas">{this.props.chatmessage}</div>
        <div className="chatbuttonandinput">
          <input className="chatinput" type="text"></input>
          <button>send</button>
        </div>
      </div>
    );
  }
}
