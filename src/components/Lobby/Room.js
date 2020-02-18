import React, { Component } from "react";

export default class Room extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.url} alt={this.props.title} />
      </div>
    );
  }
}
