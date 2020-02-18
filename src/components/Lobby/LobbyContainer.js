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

  displayRooms = rooms => {
    return rooms.map(room => {
      return (
        <Room
          key={room.id}
          id={room.id}
          name={room.name}
          users={room.users.length}
          joinClick={this.joinClick}
        />
      );
    });
  };

  render() {
    if (!this.props.token) {
      return (
        <p>
          Login to access the game lobby <Link to="/">Return to login</Link>
        </p>
      );
    }

    return (
      <div>
        <CreateRoomForm />
        <p>Or join a game</p>
        <div className="roomItem">
          <div>Room</div>
          <div>Join?</div>
          <div>Players</div>
        </div>
        {this.props.rooms && this.displayRooms(this.props.rooms)}
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
