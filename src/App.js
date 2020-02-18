import React from "react";
import "./App.css";
import axios from "axios";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import LoginScreenContainer from "./components/Login/LoginScreenContainer";
import SignupScreenContainer from "./components/Signup/SignupScreenContainer";
import LobbyContainer from "./components/Lobby/LobbyContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>A FAKE ARTIST GOES TO NEW YORK</h1>
        <Route path="/lobby" exact component={LobbyContainer} />
        <Route path="/signup" exact component={SignupScreenContainer} />
        <Route path="/" exact component={LoginScreenContainer} />
      </Provider>
    );
  }
}

export default App;
