import React, { Component } from 'react';
import './Input.scss';
import { Flex } from 'antd-mobile';

class Input extends Component{
    constructor (props) {
        super(props)
    }
    render () {
        var { icon } = this.props;
        icon = "iconfont " + icon
        return (
            <Flex className="input-component">
                <Flex.Item>
                    <i className={icon}></i><span>{this.props.title}</span>
                </Flex.Item>
                <Flex.Item>
                    <input 
                        placeholder={this.props.placeholder} 
                        type={this.props.type}
                    >
                    </input>
                </Flex.Item>
            </Flex>
        )
    }
}

export default Input;