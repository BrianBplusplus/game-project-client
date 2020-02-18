import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Room from "./Room";

export class LobbyContainer extends Component {
  stream = new EventSource(
    "https://game-project-alex-brian-server.herokuapp.com/stream"
  );

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const action = JSON.parse(data);

      const { type, payload } = action;

      console.log("stream action", action);

      this.props.dispatch(action);
    };
  }
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {!this.props.token && (
          <p>
            Login to access the game lobby <Link to="/">Return to login</Link>
          </p>
        )}

        <Room />

        {this.props.token && <p>Welcome to the game lobby</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ token: state.user.token });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(LobbyContainer);
