import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../../App";

export default class Chatroom extends Component {
  state = {
    message: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    try {
      await axios.post(`${baseUrl}/message`, {
        message: this.state.message,
        roomId: this.props.id
      });
    } catch (error) {
      console.error(error);
    }

    this.setState({ message: "" });
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
          <form className="chatInput" onSubmit={event => this.onSubmit(event)}>
            <input
              type="text"
              name="message"
              placeholder="message"
              value={this.state.message}
              onChange={event => this.onChange(event)}
            ></input>
            <button className="sendMessage" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
