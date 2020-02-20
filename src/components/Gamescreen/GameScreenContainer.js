import React, { Component } from "react";
import { connect } from "react-redux";

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
      canvas = p.createCanvas(700, 400);
      p.background(255);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = props => {
      const allLines = props.roomInfo.drawingLines;

      if (allLines && allLines.length) {
        allLines.map(line => line.data.map(valuePair => newDrawing(valuePair)));
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
      const url = `https://game-project-alex-brian-server.herokuapp.com/drawing`;
      await axios.post(
        url,
        {
          data: mouseData,
          roomId: this.state.roomId,
          color: this.color
        },
        { headers: { Authorization: `Bearer ${this.props.token}` } }
      );
    };

    const newDrawing = data => {
      p.stroke(51, 255, 177);
      p.strokeWeight(8);
      p.smooth();
      p.line(data[0], data[1], data[2], data[3]);
    };
  };

  render() {
    return (
      <div>
        {this.props.rooms &&
          this.props.rooms.map(room => {
            if (room.id === this.state.roomId) {
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
                        id={room.id}
                        chatmessage={room.messages.map((message, index) => {
                          return <li key={index}>{message.message}</li>;
                        })}
                      />
                    }
                    <P5Wrapper
                      sketch={this.sketch}
                      roomInfo={this.props.rooms.find(
                        room => room.id === this.state.roomId
                      )}
                    />
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

const mapStateToProps = state => ({
  rooms: state.room,
  token: state.user.token
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreenContainer);
