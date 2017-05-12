import React from 'react';
import ReactDOM from 'react-dom';

import 'element-react';
import 'element-theme-default';
import { Router, Route, hashHistory } from 'react-router';

import './index.css';
import Home from './Home';
import ButtonComponent from './ButtonComponent';
import TreeComponent from './TreeComponent';
import TableComponent from './TableComponent';

ReactDOM.render(
    <Router history={hashHistory} >   
        <Route path="/" component={Home} >
        </Route>
        <Route path="/button" component={ButtonComponent} >
        </Route>
        <Route path="/tree" component={TreeComponent} >
        </Route>
        <Route path="/table" component={TableComponent} >
        </Route>
    </Router>
    , document.getElementById('root')
);
