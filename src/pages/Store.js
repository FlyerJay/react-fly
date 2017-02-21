import React from 'react';
import SearchBar from '../components/SearchBar';
import { ListView } from 'antd-mobile';
import StoreItem from '../components/StoreItem';

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
]

let index = data.length -1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

export default class Index extends React.Component{
    constructor (props) {
        super(props);
        const getSectionData = (dataBlob,sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = (pIndex * NUM_SECTIONS) + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
        };
        this.genData();
        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: false,
        }
        this.onEndReached = (event) => {
            this.setState({ isLoading: true });
            setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
            }, 1000);
        }
    }
    render () {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                height: 8,
                backgroundColor:'#efefef',
            }}
            />
        );//分割符
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <StoreItem {...obj} key={rowID}></StoreItem>
            );
        };//行
        return (
            <div className="page store-page">
                <SearchBar
                    explain="搜索4S店"
                />
                <div className="page-content">
                    <ListView ref="lv"
                        dataSource={this.state.dataSource}
                        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? '加载中...' : '加载完毕'}
                        </div>}
                        renderRow={row}
                        className="fortest"
                        style={{
                            height: document.documentElement.clientHeight - 100,
                            overflow: 'auto',
                            border: '1px solid #ddd',
                        }}
                        pageSize={4}
                        scrollRenderAheadDistance={500}
                        scrollEventThrottle={20}
                        onScroll={() => { console.log('scroll'); }}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </div>
            </div>
        )
    }
}
