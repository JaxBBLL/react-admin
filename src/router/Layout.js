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
          <section className="g-header">
            <h3>React Admin</h3>
          </section>
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
                      <span>菜单</span>
                    </span>
                  }
                >
                  <CustomNavLink
                    to="/home"
                    tag="li"
                    className="ant-menu-item"
                    activeClassName="ant-menu-item ant-menu-item-selected"
                    style={{ paddingLeft: 40 }}
                  >
                    Home
                  </CustomNavLink>
                  <CustomNavLink
                    to="/list"
                    tag="li"
                    className="ant-menu-item"
                    activeClassName="ant-menu-item ant-menu-item-selected"
                    style={{ paddingLeft: 40 }}
                  >
                    list
                  </CustomNavLink>
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
