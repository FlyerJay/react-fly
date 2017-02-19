import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Index from '../pages/Index';
import Store from '../pages/Store';

class Roots extends Component{
    render () {
        return (
            <ReactCSSTransitionGroup
                transitionName = "transition"
                component = "div"
                className = "transition"
                transitionEnterTimeout = { 300 }
                transitionLeaveTimeout = { 300 }

            >
                <div 
                    key={this.props.location.pathname}
                    className="router-container">
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="index" component={Index}></Route>
            <Route path="store" component={Store}></Route>
        </Route>
    </Router>
)

export default RouteConfig;