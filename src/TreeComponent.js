import React, { Component } from 'react';
import { Tree } from 'element-react';

class TreeComponent extends Component {
    constructor(props) {
            super(props);
            this.state = {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                options: {
                    children: 'children',
                    label: 'label'
                }
            }

        }

        render() {
            return ( 
            	<Tree data={ this.state.data }
                options={ this.state.options }
                highlightCurrent={ true }
                onCheckChange={
                    (data, checked, indeterminate) => {
                        console.debug('onCheckChange: ', data, checked, indeterminate)
                    }
                }
                onNodeClicked={
                    (data, reactElement, ) => {
                        console.debug('onNodeClicked: ', data, reactElement)
                    }
                }/>)
        }


}

export default TreeComponent;
