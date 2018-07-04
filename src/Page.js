import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import List from 'views/List';
import Detail from 'views/Detail';

export default () => (
    <Router>
        <Switch>
            <Route path="/list" component={List} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </Router>
)