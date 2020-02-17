import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Testcomponent from "./components/Testcomponent";
import Routecomponent from "./components/Routecomponent";

function App() {
  return (
    <Provider store={store}>
      <h1>Hola</h1>
      <Testcomponent />
      <Route path="/router" exact component={Routecomponent} />
    </Provider>
  );
}

export default App;
