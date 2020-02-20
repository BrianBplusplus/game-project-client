import React from "react";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginScreenContainer from "./components/Login/LoginScreenContainer";
import SignupScreenContainer from "./components/Signup/SignupScreenContainer";
import LobbyContainer from "./components/Lobby/LobbyContainer";
import GameScreenContainer from "./components/Gamescreen/GameScreenContainer";

class App extends React.Component {
  stream = new EventSource(
    "http://localhost:4000/stream"
    // "https://game-project-alex-brian-server.herokuapp.com/stream"
  );

  protectedRoutes = (Component, routerProps) => {
    const { jwt } = this.props;
    return jwt ? <Component {...routerProps} /> : <Redirect to="/" />;
  };

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
        <Route path="/signup" exact component={SignupScreenContainer} />
        <Route
          path="/lobby"
          exact
          render={routerProps =>
            this.protectedRoutes(LobbyContainer, routerProps)
          }
        />
        <Route
          path="/gamescreen/:roomId"
          exact
          render={routerProps =>
            this.protectedRoutes(GameScreenContainer, routerProps)
          }
        />
        <Route path="/" exact component={LoginScreenContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ jwt: state.user.token });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
