import React, { Component } from "react";
import { connect } from "react-redux";

import "./game.css";
import Chatroom from "./Chatroom";
import GameScreen from "./GameScreen";
import Bottombar from "./Bottombar";
import axios from "axios";
import P5Wrapper from "react-p5-wrapper";

export class GameScreenContainer extends Component {
  roomId = parseInt(this.props.match.params.roomId);

  sketch = p => {
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(700, 400);
      p.background(255);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = props => {
      console.log(props.roomInfo.drawingLines);
      const allLines = props.roomInfo.drawingLines;
      if (allLines && allLines.length) {
        allLines.map(line => line.data.map(valuePair => newDrawing(valuePair)));
      }
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
      const url = `https://game-project-alex-brian-server.herokuapp.com/drawing`;
      await axios.post(url, { data: mouseData, roomId: this.roomId });
    };

    const newDrawing = data => {
      p.noStroke();
      p.fill(51, 255, 177);
      p.square(data[0], data[1], 10);
    };
  };

  render() {
    return (
      <div>
        {this.props.rooms &&
          this.props.rooms.map(room => {
            if (room.id === this.roomId) {
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
                    <P5Wrapper
                      sketch={this.sketch}
                      roomInfo={this.props.rooms.find(
                        room => room.id === this.roomId
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

const mapStateToProps = state => ({ rooms: state.room });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreenContainer);
