import React from 'react';
import NavBar from '../components/NavBar';
import './Index.scss'

export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.goToStore = () => {
            this.context.router.push({
                pathname:'/store',
            })
        }
    };
    render () {
        return (
            <div className = "page index-page">
                <NavBar
                    title="首页"
                    onRightTouch={this.goToStore}
                >
                </NavBar>
            </div>
        )
    }
}
Index.contextTypes = {
    router:React.PropTypes.object.isRequired
}
