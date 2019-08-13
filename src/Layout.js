import React, { Component } from "react";
import { NavLink, HashRouter as Router } from "react-router-dom";
import Page from "./Page.js";
class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="g-app">
          <section className="g-header" />
          <section className="g-body">
            <section className="g-side">
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/detail">detail</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/list">List</NavLink>
                </li>
              </ul>
            </section>
            <section className="g-main">
              <section className="g-container">
                <Page />
              </section>
            </section>
          </section>
        </div>
      </Router>
    );
  }
}

export default Layout;
