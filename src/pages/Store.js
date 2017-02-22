import React from 'react';
import SearchBar from '../components/SearchBar';
import { ListView } from 'antd-mobile';
import StoreItem from '../components/StoreItem';
import Button from '../components/Button';
import './Store.scss';

const data = [
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
    {
        url: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        storeName: '重庆市名驿长安汽车4S店',
        distance: '4.2km',
        address: '重庆市南岸区弹子石国际社区福民路38号9层',
        phone: '2431-3445287'
    },
]

let index = data.length -1;
let pageIndex = 0;

export default class Index extends React.Component{
    constructor (props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.dataBlob = {};
        this.rowIDs = [];

        this.genData = (pIndex = 0) => {
            for (let i = 0; i < 10; i++) {
                const rowName = `${pIndex * 20 + i}`;
                this.rowIDs.push(rowName);
                this.dataBlob[rowName] = rowName;
            }
        };

        this.genData();

        this.state = {
            dataSource: dataSource.cloneWithRows(this.dataBlob, this.rowIDs),
            isLoading: false,
            listHeight:'0px',
            pageSize:10,
            selectItem:0,
        }

        this.onEndReached = (event) => {
            this.setState({ isLoading: true });
            setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.dataBlob, this.rowIDs),
                isLoading: false,
            });
            }, 1000);
        }

        this.handleButtonClick = (event) => {
            console.log("click");
        }
    }
    componentDidMount () {
        var lv = this.refs.lv;
        var windowHeight = document.documentElement.clientHeight;
        var page = this.refs.page;
        var bc = this.refs.bc;
        var marginTop = getComputedStyle(page,false)['margin-top'].split('px')[0] - 0;
        var marginBottom = (getComputedStyle(bc,false)['height'].split('px')[0] - 0) + ((getComputedStyle(bc,false)['margin-top'].split('px')[0] - 0) * 2)
        var height = windowHeight - marginTop - marginBottom + 'px'
        this.setState({listHeight:height})
    }
    handleItemClick(rowData){
        this.state.selectItem = rowData;
    }
    render () {
        const row = (rowData) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <StoreItem {...obj} click={this.handleItemClick.bind(this, rowData)}></StoreItem>
            ); 
        };//行
        return (
            <div className="page store-page">
                <SearchBar
                    explain="搜索4S店"
                />
                <div className="page-content" ref="page">
                    <ListView ref="lv"
                        dataSource={this.state.dataSource}
                        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? '加载中...' : '加载完毕'}
                        </div>}
                        renderRow={row}
                        className="fortest"
                        style={{
                            height:this.state.listHeight,
                            overflow: 'auto',
                            border: '1px solid #ddd',
                        }}
                        pageSize={this.state.pageSize}
                        scrollRenderAheadDistance={500}
                        scrollEventThrottle={20}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                    <div className="button-control" ref="bc">
                        <Button
                            text="确定"
                            click={this.handleButtonClick} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
