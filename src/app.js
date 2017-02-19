import './screen.js';
import './style/iconfont.scss';
import 'flex.css'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, Link, hashHistory} from 'react-router';

import store from './store'
import route from './route'

render(
    (
        <Provider store={store}>
            {route}
        </Provider>
    ),
    document.getElementById('app')
)
