import React from "react";
import "./App.css";
import axios from "axios";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import LoginScreenContainer from "./components/Login/LoginScreenContainer";
import SignupScreenContainer from "./components/Signup/SignupScreenContainer";

class App extends React.Component {
  stream = new EventSource(
    "https://game-project-alex-brian-server.herokuapp.com/stream"
  );

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const action = JSON.parse(data);

      const { type, payload } = action;

      console.log("stream action", action);
    };
  }

  render() {
    return (
      <Provider store={store}>
        <h1>A FAKE ARTIST GOES TO NEW YORK</h1>
        <Route path="/signup" exact component={SignupScreenContainer} />
        <Route path="/" exact component={LoginScreenContainer} />
      </Provider>
    );
  }
}

export default App;
