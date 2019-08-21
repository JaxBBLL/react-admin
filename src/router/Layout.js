import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import CustomNavLink from "@components/CustomNavLink";
import Page from "./Page";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="g-app">
          <section className="g-header" />
          <section className="g-body">
            <section className="g-side">
              <Menu
                theme="dark"
                defaultSelectedKeys={["9"]}
                defaultOpenKeys={["sub"]}
                mode="inline"
              >
                <SubMenu
                  key="sub"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>示例菜单</span>
                    </span>
                  }
                >
                  <CustomNavLink to="/home">Home</CustomNavLink>
                  <CustomNavLink to="/detail">detail</CustomNavLink>
                  <CustomNavLink to="/list">List</CustomNavLink>
                </SubMenu>
              </Menu>
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
