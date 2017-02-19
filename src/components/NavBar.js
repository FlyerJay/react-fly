import React from 'react';
import './NavBar.scss';
import { Flex } from 'antd-mobile';

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.goBack = () => {
            this.context.router.goBack();
        };
    };
    render () {
        return (
            <Flex className="navbar" wrap="nowrap" justify="center">
                <div className="left-button" onTouchEnd={this.goBack}>
                    <i className="iconfont icon-back">{this.props.leftContent}</i>
                </div>
                <Flex.Item className="title">
                    <span>{this.props.title}</span>
                </Flex.Item>
                <div className="right-button" onTouchEnd={this.props.onRightTouch}>
                    {this.props.rightContent}
                </div>
            </Flex>
        )
    }
}
NavBar.contextTypes = {
    router:React.PropTypes.object.isRequired
}