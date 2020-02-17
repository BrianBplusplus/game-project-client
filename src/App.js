import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import LoginScreenContainer from "./components/Login/LoginScreenContainer";
import SignupScreenContainer from "./components/Signup/SignupScreenContainer";

function App() {
  return (
    <Provider store={store}>
      <h1>A FAKE ARTIST GOES TO NEW YORK</h1>
      <Route path="/signup" exact component={SignupScreenContainer} />
      <Route path="/" exact component={LoginScreenContainer} />
    </Provider>
  );
}

export default App;
