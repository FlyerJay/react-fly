import './screen.js';
import { DatePicker, List, Button } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom'

ReactDOM.render(
    (
        <div>
            <DatePicker
            mode="date"
            title="选择日期"
            extra="可选,小于结束日期"
            >
            <List.Item arrow="horizontal">日期</List.Item>
            </DatePicker>
        </div>
    ),
    document.getElementById('app')
)
