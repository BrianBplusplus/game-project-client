import React, { Component } from "react";
import { connect } from "react-redux";

import "./game.css";
import Chatroom from "./Chatroom";
import GameScreen from "./GameScreen";
import Bottombar from "./Bottombar";

export class GameScreenContainer extends Component {
  render() {
    return (
      <div>
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
