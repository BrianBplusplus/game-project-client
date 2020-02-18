import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Room from "./Room";
import CreateRoomForm from "./CreateRoomForm";
import { joinRoom } from "../../store/user/action";

export class LobbyContainer extends Component {
  joinClick = roomId => {
    this.props.joinRoom(roomId);
  };

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

        {this.props.token && <CreateRoomForm />}

        {this.props.rooms &&
          this.props.token &&
          this.props.rooms.map(room => {
            return (
              <Room
                key={room.id}
                id={room.id}
                name={room.name}
                joinClick={this.joinClick}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.user.token,
  rooms: state.room
});

const mapDispatchToProps = { joinRoom };

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
