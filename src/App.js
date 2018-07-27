import 'style/app.less'
import React, { Component } from 'react';
import {
  Switch,
  Route,
  HashRouter as Router
} from 'react-router-dom'
import Layout from './Layout.js'
import Login from './Login.js'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/" component={Layout} />
          </Switch>
      </Router>
    );
  }
}

export default App;
