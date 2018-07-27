import React, {Component} from 'react';
import http from 'common/http';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'zjadmin',
      password: '123456',
      captcha: ''
    }
  }
  handle(prop, e) {
    const value = e.target.value;
    this.setState({[prop]: value})
  }
  loginSubmit() {
    console.log('login')
    http.post('/api/v1/admin/login', {
      userName: this.state.userName,
      password: this.state.password,
      captcha: 1234
    }).then(res => {
      console.log(res)
      if(res.success) {
        this.props.history.push('/list')
      }
    })
  }
  render() {
    return (
      <div className="login-wrap">
        <form
          onSubmit={(e) => {
          e.preventDefault();
          return false;
        }}>
          <div className="form-group">
            <label htmlFor="userName">用户名</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              onChange={this.handle.bind(this, 'userName')}
              value={this.state.userName}
              placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handle.bind(this, 'password')}
              value={this.state.password}
              placeholder="密码"/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/>记住我
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this
            .loginSubmit
            .bind(this)}>登录</button>
        </form>
      </div>
    )
  }
}