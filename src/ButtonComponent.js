import React, { Component } from 'react';
import { Layout ,Button} from 'element-react';

class ButtonComponent extends Component {
	render() {
    return (
      <div>
      	<h3>button</h3>
        <Layout.Row>
          <Layout.Col span="24" >
            <Button type="default">default</Button>
            <Button type="success">success</Button>
            <Button type="primary">primary</Button>
            <Button type="info">info</Button>
            <Button type="danger">danger</Button>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row>
          <Layout.Col>
          	 <Button type="primary" size="large">大型按钮</Button>
		      <Button type="primary">正常按钮</Button>
		      <Button type="primary" size="small">小型按钮</Button>
		      <Button type="primary" size="mini">超小按钮</Button>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}
export default ButtonComponent;