import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import React from 'react';
import Index from '../pages/Index';
import Store from '../pages/Store';
import MaintainSet from '../pages/MaintainSet';
import Roots from './Roots';

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="index" component={Index}></Route>
            <Route path="store" component={Store}></Route>
            <Route path="maintainset" component={MaintainSet}></Route>
        </Route>
    </Router>
)

export default RouteConfig;