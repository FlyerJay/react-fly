import React from 'react';
import SearchBar from '../components/SearchBar';

export default class MaintainSet extends React.Component{
    render () {
        return (
            <div className="page maintain-set-page">
                <SearchBar
                    explain="搜索车型"
                />
            </div>
        )
    }
}
