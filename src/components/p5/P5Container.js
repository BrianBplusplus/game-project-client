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

  sendData = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h2>Current room</h2>
        <div className="p5">
          {/* <Chatroom /> */}
          <P5Wrapper sketch={sketch} sendData={this.sendData} />
        </div>
        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(P5Container);
