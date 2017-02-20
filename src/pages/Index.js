import React from 'react';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { pushPage } from '../action';
import './Index.scss'

class Index extends React.Component{
    constructor(props) {
        super(props);
        var self = this;
        const { dispatch, pageStack } = props;
        this.goToStore = () => {
            dispatch(pushPage('store'));
            this.context.router.push({
                pathname:'/store',
            })
        }
        this.goMaintainSet = () => {
            dispatch(pushPage('maintainset'));
            this.context.router.push({
                pathname:'/maintainset',
            })
        }
    };
    render () {
        return (
            <div className = "page index-page">
                <NavBar
                    title="添加保养预约"
                    onRightTouch={this.goMaintainSet}
                    rightContent="保养套餐"
                >
                </NavBar>
                <div className = "input-control">
                    <Input 
                        placeholder = "请输入您的车牌号"
                        title = "车牌号"
                        icon = "icon-plate"
                    ></Input>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "请选择到店时间"
                        title = "预约时间"
                        icon = "icon-time"
                    ></Input>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "请选择服务商"
                        title = "4S店选择"
                        icon = "icon-store"
                    ></Input>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "预约里程"
                        title = "预约里程"
                        icon = "icon-mile"
                        type = "number"
                    ></Input>
                    <div className="explain">
                        客户留言预约描述客户留言预约描述客户留言预约描述客户
                        留言预约描述客户留言预约描述客户留言预约描述客户留言
                        预约描述客户留言预约描述客户留言
                    </div>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "联系人"
                        title = "联系人"
                        icon = "icon-contact"
                    ></Input>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "联系电话"
                        title = "联系电话"
                        icon = "icon-phone"
                        type = "number"
                    ></Input>
                </div>
                <div className = "input-control">
                    <Input 
                        placeholder = "预约描述"
                        title = "预约描述"
                        icon = "icon-comment"
                    ></Input>
                    <div className="explain">
                        客户留言预约描述客户留言预约描述客户留言预约描述客户
                        留言预约描述客户留言预约描述客户留言预约描述客户留言
                        预约描述客户留言预约描述客户留言
                    </div>
                </div>
                <div className = "button-control">
                    <Button 
                        text = "确定预约"
                        click = {this.goToStore}
                    ></Button>
                </div>
            </div>
        )
    }
}
Index.contextTypes = {
    router:React.PropTypes.object.isRequired
}

export default connect((state) => {return {pageStack:state.pageStack}})(Index)
