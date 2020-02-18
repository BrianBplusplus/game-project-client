import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bottombar extends Component {
  render() {
    return (
      <div>
        Return to <Link to="/lobby">Lobby</Link>
      </div>
    );
  }
}
