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
        <h2>
          {this.props.rooms &&
            this.props.rooms.map(room => {
              if (room.id === roomId) {
                return <p>{room.name}</p>;
              }
            })}
        </h2>
        <div className="gamescreencontainer">
          <Chatroom />
          <GameScreen />
        </div>
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
