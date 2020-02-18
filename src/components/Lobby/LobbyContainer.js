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
    return <div></div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(LobbyContainer);
