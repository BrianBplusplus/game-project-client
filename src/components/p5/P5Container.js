import React, { Component } from "react";
import { connect } from "react-redux";

import "../Gamescreen/game.css";
import Chatroom from "../Gamescreen/Chatroom";
import GameScreen from "../Gamescreen/GameScreen";
import Bottombar from "../Gamescreen/Bottombar";

import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch.js";

class P5Container extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Current room</h2>
        <div className="gamescreencontainer">
          {/* <Chatroom /> */}
          <P5Wrapper sketch={sketch} />
        </div>
        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(P5Container);
