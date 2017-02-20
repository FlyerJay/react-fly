import React from 'react';
import './NavBar.scss';
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import { popPage } from '../action';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        const { dispatch, pageStack } = props;
        this.goBack = () => {
            var fallback = dispatch(popPage());
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

export default connect((state) => {return {pageStack:state}})(NavBar);