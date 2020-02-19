import React, { Component } from "react";
import { connect } from "react-redux";

import "./game.css";
import Chatroom from "./Chatroom";
import GameScreen from "./GameScreen";
import Bottombar from "./Bottombar";

export class GameScreenContainer extends Component {
  render() {
    const roomId = parseInt(this.props.match.params.roomId);
    console.log("this.props.rooms", this.props.rooms);
    return (
      <div>
        {this.props.rooms &&
          this.props.rooms.map(room => {
            if (room.id === roomId) {
              return (
                <div key={room.id}>
                  <h2>{room.name}</h2>

                  <ul>
                    Players:
                    {room.users.map(user => {
                      return <li>{user.userName}</li>;
                    })}
                  </ul>

                  <div className="gamescreencontainer">
                    <Chatroom />
                    <GameScreen />
                  </div>
                </div>
              );
            }
          })}

        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({ rooms: state.room });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreenContainer);
