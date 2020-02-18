import React, { Component } from "react";
import { connect } from "react-redux";

import "./game.css";
import Chatroom from "./Chatroom";
import GameScreen from "./GameScreen";
import Bottombar from "./Bottombar";

export class GameScreenContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Current room</h2>
        <div className="gamescreencontainer">
          <Chatroom />
          <GameScreen />
        </div>
        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreenContainer);
