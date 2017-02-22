import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import './StoreItem.scss';

class StoreItem extends Component{
    constructor (props){
        super(props);
    }
    render () {
        return (
            <Flex className="store-item" wrap="nowrap" justify="center" onClick={this.props.click}>
                <Flex className="selector" align="center" justify="end">
                    <i className="iconfont icon-select"></i>
                </Flex>
                <Flex.Item>
                    <Flex  className="store-info" wrap="nowrap" justify="center">
                        <div className="store-url">
                            <img src={this.props.url}/>
                        </div>
                        <Flex.Item>
                            <Flex direction="column" className="info-content" align="start">
                                <Flex.Item className="line">
                                    <span className="store-name">{this.props.storeName}</span>
                                    <span className="store-distance">{this.props.distance}</span>
                                </Flex.Item>
                                <Flex.Item wrap="nowrap" className="line"><span className="store-address">{this.props.address}</span></Flex.Item>
                                <Flex.Item className="line"><span className="store-phone">联系电话：{this.props.phone}</span></Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
            </Flex>
        )
    }
}

export default StoreItem;