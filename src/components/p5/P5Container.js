import React, { Component } from "react";
import { connect } from "react-redux";

import "../Gamescreen/game.css";
import Bottombar from "../Gamescreen/Bottombar";
import axios from "axios";

import P5Wrapper from "react-p5-wrapper";
import { test } from "./testdata";

class P5Container extends Component {
  state = {};

  sketch = p => {
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(700, 400);
      p.background(255);
      test.map(valuePair => newDrawing(valuePair));
    };

    p.mouseDragged = () => {
      p.fill(51, 255, 177);
      p.noStroke();
      p.square(p.mouseX, p.mouseY, 10);

      let data = [p.mouseX, p.mouseY];

      mouseData.push(data);
    };

    const mouseData = [];

    p.mouseReleased = async () => {
      const url = `http://localhost:4000/canvas`;
      await axios.post(url, { data: mouseData });
    };

    // receive new info: via store
    // data will be an array of arrays [ [mouseX, mouseY], [mouseX, mouseY] ]
    // make the newDrawing function run for each of the value pairs
    const newDrawing = data => {
      p.noStroke();
      p.fill(51, 255, 177);
      p.square(data[0], data[1], 10);
    };
  };

  render() {
    return (
      <div>
        <h2>Current room</h2>
        <div className="p5">
          {/* <Chatroom /> */}
          <P5Wrapper sketch={this.sketch} />
        </div>
        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(P5Container);
