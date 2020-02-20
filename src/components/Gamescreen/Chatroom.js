import React, { Component } from "react";
import axios from "axios";

export default class Chatroom extends Component {
  state = {
    message: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    // const url = `https://game-project-alex-brian-server.herokuapp.com/message`;
    const url = `http://localhost:4000/message`;

    await axios.post(url, {
      message: this.state.message,
      roomId: this.props.id
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="chatroom">
        Chatroom
        <div className="chatroomcanvas">{this.props.chatmessage}</div>
        <div className="chatbuttonandinput">
          <form className="chatinput" onSubmit={event => this.onSubmit(event)}>
            <input
              type="text"
              name="message"
              placeholder="message"
              values={this.state.message}
              onChange={event => this.onChange(event)}
            ></input>
            <button className="sendMessage" type="submit">
              Submit
            </button>
          </form>

          {/*    <input className="chatinput" type="text"></input>
          <button
            className="sendMessage"
            onClick={() => this.props.sendMessage(this.props.id)}
          >
            send
          </button> */}
        </div>
      </div>
    );
  }
}
