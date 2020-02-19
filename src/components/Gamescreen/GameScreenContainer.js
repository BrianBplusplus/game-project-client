import React, { Component } from "react";
import { connect } from "react-redux";

import "./game.css";
import Chatroom from "./Chatroom";
import GameScreen from "./GameScreen";
import Bottombar from "./Bottombar";

export class GameScreenContainer extends Component {
  render() {
    const roomId = parseInt(this.props.match.params.roomId);
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
                    {room.users &&
                      room.users.map((user, index) => {
                        return <li key={index}>{user.userName}</li>;
                      })}
                  </ul>

                  <div className="gamescreencontainer">
                    {
                      <Chatroom
                        chatmessage={room.messages.map(message => {
                          return <li>{message.message}</li>;
                        })}
                      />
                    }

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
