import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'element-react';
import 'element-theme-default';
import { Router, Route, hashHistory } from 'react-router';

import Home from './Home';
import ButtonComponent from './ButtonComponent';
import TreeComponent from './TreeComponent';

ReactDOM.render(
    <Router history={hashHistory} >   
        <Route path="/" component={Home} >
        </Route>
        <Route path="/button" component={ButtonComponent} >
        </Route>
        <Route path="/tree" component={TreeComponent} >
        </Route>
    </Router>
    , document.getElementById('root')
);
