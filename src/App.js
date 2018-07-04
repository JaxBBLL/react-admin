import 'style/app.less'
import React, { Component } from 'react';
import {
  NavLink ,
  HashRouter as Router
} from 'react-router-dom'
import Page from './Page.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrap">
        <section className="app-nav">
          <p className="app-logo">JaxAdmin</p>
          <ul className="app-menu">
            <li className="app-menu-item"><NavLink to="/detail">detail</NavLink ></li>
            <li className="app-menu-item"><NavLink to="/list">List</NavLink ></li>
          </ul>
        </section>
         
          <section className="app-main">
            <header className="app-header"></header>
            <section className="app-container">
              <Page/>
            </section>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
