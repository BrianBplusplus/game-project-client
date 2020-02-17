import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Routecomponent from "./components/Routecomponent";
import LoginScreenContainer from "./components/Login/LoginScreenContainer";

function App() {
  return (
    <Provider store={store}>
      <h1>A FAKE ARTIST GOES TO NEW YORK</h1>
      <Route path="/router" exact component={Routecomponent} />
      <Route path="/" exact component={LoginScreenContainer} />
    </Provider>
  );
}

export default App;
