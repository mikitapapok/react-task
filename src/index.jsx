/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './style/normalize.scss';
import App from './App.jsx';

ReactDOM.render(
    <HashRouter >
        <App />
    </HashRouter>,

    document.getElementById('root')
);
