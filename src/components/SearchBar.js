import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import { popPage } from '../action';
import './SearchBar.scss'

class SearchBar extends Component{
    constructor (props) {
        super(props);
        const { dispatch, pageStack } = props;
        this.goBack = () => {
            var fallback = dispatch(popPage());
            this.context.router.goBack();
        };
        this.search = (event) =>{
            event.preventDefault();
            console.log(this.refs.key.value);
        }
    }
    render () {
        return (
            <Flex className="searchbar" wrap="nowrap" justify="center">
                <div className="left-button" onTouchEnd={this.goBack}>
                    <i className="iconfont icon-back">{this.props.leftContent}</i>
                </div>
                <Flex.Item className="search-box">
                    <form onSubmit={this.search}>
                        <input type="text" placeholder={this.props.explain} value={this.props.key} ref="key"/>
                    </form>
                </Flex.Item>
                <div className="right-button" onTouchEnd={this.props.onRightTouch}>
                    {this.props.rightContent}
                </div>
            </Flex>
        )
    }
}

SearchBar.contextTypes = {
    router:React.PropTypes.object.isRequired
}

export default connect((state) => {return {pageStack:state}})(SearchBar);