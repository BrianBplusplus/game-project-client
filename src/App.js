import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginScreenContainer from "./components/Login/LoginScreenContainer";
import SignupScreenContainer from "./components/Signup/SignupScreenContainer";
import LobbyContainer from "./components/Lobby/LobbyContainer";
import P5Container from "./components/p5/P5Container";
import GameScreenContainer from "./components/Gamescreen/GameScreenContainer";


class App extends React.Component {
  stream = new EventSource(
    //"http://localhost:4000/stream"
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
    return (
      <div>
        <h1>A FAKE ARTIST GOES TO NEW YORK</h1>
        <Route path="/lobby" exact component={LobbyContainer} />
        <Route path="/signup" exact component={SignupScreenContainer} />
        <Route
          path="/gamescreen/:roomId"
          exact
          component={GameScreenContainer}
        />
        <Route path="/" exact component={LoginScreenContainer} />
        <Route path="/p5" exact component={P5Container} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
