import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Room from "./Room";

export class LobbyContainer extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {!this.props.token && (
          <p>
            Login to access the game lobby <Link to="/">Return to login</Link>
          </p>
        )}

        <Room />
        {/* 
        {this.props.token && <p>Welcome to the game lobby</p>} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ token: state.user.token });

export default connect(mapStateToProps)(LobbyContainer);
