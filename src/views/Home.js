import React, { Component } from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions/counter";
import { Button, Icon } from "antd";
import CustomNavLink from "@components/CustomNavLink";

@connect(
  ({ counter }) => ({ counter }),
  mapDispatchToProps
)
class Home extends Component {
  render() {
    const { lat, lng } = this.props.counter.location;
    return (
      <div>
        <h3 style={{ fontSize: 20 }}>{this.props.counter.num}</h3>
        <Button.Group>
          <Button type="primary" onClick={this.props.add}>
            <Icon type="plus" />
          </Button>
          <Button type="default" onClick={this.props.minus}>
            <Icon type="minus" />
          </Button>
          <Button onClick={() => this.props.decode("杭州")}>获取经纬度</Button>
          <CustomNavLink to="/list" tag="button" className="ant-btn">
            去列表
          </CustomNavLink>
        </Button.Group>
        <h3 style={{ fontSize: 20 }}>
          {lat} / {lng}
        </h3>
      </div>
    );
  }
}
export default Home;
