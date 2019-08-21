import React, { Component } from "react";
import { withRouter } from "react-router-dom";

@withRouter
class CustomNavLink extends Component {
  render() {
    return (
      <li
        style={{ paddingLeft: 40 }}
        className={
          this.props.location.pathname === this.props.to
            ? "ant-menu-item ant-menu-item-selected"
            : "ant-menu-item"
        }
        onClick={() => this.props.history.push(this.props.to)}
      >
        {this.props.children}
      </li>
    );
  }
}
export default CustomNavLink;
