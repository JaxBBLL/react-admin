import React, { Component } from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import http from "../utils/http";

const names = ["李白", "白居易", "杜甫", "李清照"];

@connect(
  ({ counter }) => ({ counter }),
  mapDispatchToProps
)
class Home extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  login = () => {
    const data = {
      userName: "zjadmin",
      password: "123456",
      captcha: "",
      rememberMe: false
    };
    http("post", "/api/v1/admin/login", data).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="redux-wrap fr">
        <button onClick={this.login}>login</button>
        <button className="add_btn" onClick={this.props.add}>
          +
        </button>
        <button className="dec_btn" onClick={this.props.minus}>
          -
        </button>
        <button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </button>
        <button
          className="dec_btn"
          onClick={() => {
            const i = parseInt(Math.random() * 4);
            this.props.fetchList(names[i]);
          }}
        >
          fetchList
        </button>
        <p>
          <span>{this.props.counter.num}</span>
        </p>
        <ul className="list-wrap">
          {this.props.counter.list.map((item, index) => (
            <li key={index} className="tac">
              <h3>{item.title}</h3>
              <p>作者：{item.authors}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.split("|").join("<br>")
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Home;
