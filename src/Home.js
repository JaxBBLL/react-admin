import React, { Component } from 'react';
import { Layout} from 'element-react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>React Element UI</h1>
        <Layout.Row>
          <Layout.Col span="24" >
            <h3>this is a React test Page !</h3>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default Home;
