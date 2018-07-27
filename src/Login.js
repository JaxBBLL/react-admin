import React, { Component } from 'react';
import http from 'common/http';

export default class Login extends Component {
  loginSubmit() {
    console.log('login')
    const send = {
      userName: 'zjadmin',
      password: 123456,
      captcha: 1234
    }
    http.post('/api/v1/admin/login', send)
    .then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="login-wrap">
        <form onSubmit={(e) => {e.preventDefault();return false;}}>
          <div className="form-group">
            <label htmlFor="userName">用户名</label>
            <input type="text" className="form-control" id="userName" placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input type="password" className="form-control" id="password" placeholder="密码"/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/>记住我
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.loginSubmit.bind(this)}>登录</button>
        </form>
      </div>
    )
  }
}