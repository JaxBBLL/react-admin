import React, { Component } from 'react';
import http from 'common/http'

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.getList.bind(this);
  }
  componentWillMount() {
    this.getList();
  }
  getList() {
    http.post('/api/v1/admin/user/user').then(res => {
      this.setState({
        list: res.data.result
      })
      console.log(this.state)
    })
  }
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>用户名</td>
              <td>状态</td>
              <td>用户类型</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((item, index) => {
                return <tr key={index}>
                  <td>{ item.userName }</td>
                  <td>{ item.status }</td>
                  <td>{ item.userType }</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
