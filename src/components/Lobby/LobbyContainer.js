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
        {this.props.token && <p>Welcome to the game lobby</p>}

        {this.props.rooms &&
          this.props.token &&
          this.props.rooms.map(room => {
            return <Room key={room.id} name={room.name} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
  rooms: state.room
});

export default connect(mapStateToProps)(LobbyContainer);
//
