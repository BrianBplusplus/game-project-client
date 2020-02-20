import React, { Component } from "react";
import { connect } from "react-redux";
import { baseUrl } from "../../App";

import "./game.css";
import Chatroom from "./Chatroom";
import Bottombar from "./Bottombar";
import axios from "axios";
import P5Wrapper from "react-p5-wrapper";

export class GameScreenContainer extends Component {
  state = {
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    roomId: parseInt(this.props.match.params.roomId)
  };

  randomColor = this.randomColor.bind(this);

  randomColor() {
    this.setState({
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255]
    });
  }

  sketch = p => {
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(700, 500);
      p.background(255);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = props => {
      const allLines = props.roomInfo.drawingLines;

      if (allLines && allLines.length) {
        allLines.map(line => {
          let lineColor = line.color;
          return line.data.map(valuePair => newDrawing(valuePair, lineColor));
        });
      }
    };

    p.mouseDragged = () => {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      p.stroke(this.state.color);
      p.strokeWeight(8);
      p.smooth();
      let data = [p.mouseX, p.mouseY, p.pmouseX, p.pmouseY];

      mouseData.push(data);
    };

    const mouseData = [];

    p.mouseReleased = async () => {

    const request = await axios.post(
        `${baseUrl}/drawing`,
        {
          data: mouseData,
          roomId: this.state.roomId,
          color: this.state.color
        },
        { headers: { Authorization: `Bearer ${this.props.token}` } }
      );
    };

    const newDrawing = (data, color) => {
      p.stroke(color[0], color[1], color[2]);
      p.strokeWeight(8);
      p.smooth();
      p.line(data[0], data[1], data[2], data[3]);
    };
  };

  render() {
    const room =
      this.props.rooms &&
      this.props.rooms.find(room => room.id === this.state.roomId);

    const displayPlayers = players => {
      return (
        players &&
        players.map((player, index) => {
          return (
            <div className="userList" key={index}>
              {player.userName}
            </div>
          );
        })
      );
    };

    return (
      <div>
        <h2>{room.name}</h2>
        <div className="players">
          <h3>Players:</h3>
          {displayPlayers(room.users)}
        </div>

        <div className="gamescreencontainer">
          <Chatroom
            id={room.id}
            chatmessage={room.messages.map((message, index) => {
              return (
                <div className="message" key={index}>
                  {message.message}
                </div>
              );
            })}
          />
          <div className="canvas">
            <P5Wrapper
              sketch={this.sketch}
              roomInfo={this.props.rooms.find(
                room => room.id === this.state.roomId
              )}
            />
          </div>
        </div>

        <Bottombar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.room,
  token: state.user.token.token
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreenContainer);
