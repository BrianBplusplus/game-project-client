import React, { Component } from "react";
import { connect } from "react-redux";

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
    return <div>{!this.props.token && "Login to access the game lobby"}</div>;
  }
}

const mapStateToProps = state => ({ token: state.user.token });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(LobbyContainer);
