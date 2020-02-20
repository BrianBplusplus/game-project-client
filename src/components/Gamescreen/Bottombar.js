import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bottombar extends Component {
  render() {
    return (
      <div className="bottomBar">
        Return to <Link to="/lobby">Lobby</Link>
      </div>
    );
  }
}
