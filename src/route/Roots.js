import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Roots extends Component{
    constructor (props) {
        super(props);
        var self = this;
    }
    render () {
        return (
            <ReactCSSTransitionGroup
                transitionName = {this.props.mode}//页面切换动画绑定到store.mode
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

Roots.contextTypes = {
    router:React.PropTypes.object.isRequired
}

export default connect((state) =>{return {pageStack:state.pageStack,mode:state.mode}})(Roots);