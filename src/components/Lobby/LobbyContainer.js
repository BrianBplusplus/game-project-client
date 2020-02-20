import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Room from "./Room";
import CreateRoomForm from "./CreateRoomForm";
import { joinRoom } from "../../store/user/action";

export class LobbyContainer extends Component {
  joinClick = roomId => {
    this.props.joinRoom(roomId);
    this.props.history.push(`/gamescreen/${roomId}`);
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
        <div className="createRoom">
          <CreateRoomForm />
          <p>Or join a game!</p>
        </div>
        <div className="roomList">
          <div className="roomItem">
            <div>Room</div>
            <div>Join?</div>
            <div>Players</div>
          </div>
          {this.props.rooms && this.displayRooms(this.props.rooms)}
        </div>
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
