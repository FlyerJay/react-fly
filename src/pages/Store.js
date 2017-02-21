import React from 'react';
import SearchBar from '../components/SearchBar';
import { ListView } from 'antd-mobile';

export default class Index extends React.Component{
    render () {
        return (
            <div className="page store-page">
                <SearchBar
                    explain="搜索4S店"
                >
                </SearchBar>
            </div>
        )
    }
}
