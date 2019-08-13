import React, { Component } from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";

@connect(
  ({ counter }) => ({ counter }),
  mapDispatchToProps
)
class Home extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    const { lat, lng } = this.props.counter.location;
    return (
      <div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.asyncAdd}>async</button>
        <button
          onClick={() => {
            this.props.decode("杭州");
          }}
        >
          获取经纬度
        </button>
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
