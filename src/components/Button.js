import React, { Component } from 'react';
import './Button.scss';

class Button extends Component{
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="button-component" onClick = {this.props.click}>
                <i className={this.props.icon}></i><span>{this.props.text}</span>
            </div>
        )
    }
}

export default Button;