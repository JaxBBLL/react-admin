import React, { Component } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Login from "@views/Login";
import NotFound from "@views/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/404" component={NotFound} exact />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
