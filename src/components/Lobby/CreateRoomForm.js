import React, { Component } from "react";
import axios from "axios";

export default class CreateRoomForm extends Component {
  state = {
    room: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const url = `https://game-project-alex-brian-server.herokuapp.com/room`;

    await axios.post(url, { name: this.state.room });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <p>Create Room</p>
        <input
          type="text"
          name="room"
          placeholder="room"
          values={this.state.room}
          onChange={event => this.onChange(event)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}