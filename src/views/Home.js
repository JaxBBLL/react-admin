import React, { Component } from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions/counter";
import { Button } from "antd";

@connect(
  ({ counter }) => ({ counter }),
  mapDispatchToProps
)
class Home extends Component {
  render() {
    const { lat, lng } = this.props.counter.location;
    return (
      <div>
        <Button type="primary" onClick={this.props.add}>
          +
        </Button>
        <Button type="danger" onClick={this.props.minus}>
          -
        </Button>
        <Button onClick={this.props.asyncAdd}>async</Button>
        <Button onClick={() => this.props.decode("杭州")}>
          获取经纬度
        </Button>
        <div>
          <span>{this.props.counter.num}</span>
          <p>
            {lat} / {lng}
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
