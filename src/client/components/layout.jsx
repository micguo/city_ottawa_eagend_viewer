import React from 'react';
import ReactDOM   from 'react-dom';
import AppHeader from './Header/index.jsx';
import AppFooter from './Footer/index.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import styles from './layout.css';

let menuItems = [
    {
        'title': 'meetings'
    },
    {
        'title': 'about'
    }
];

injectTapEventPlugin();

ReactDOM.render(
    <BrowserRouter>
        <div id="body-content">
            <header><AppHeader menuItems={menuItems}/></header>
            <h1>test me 1</h1>
            <footer><AppFooter/></footer>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);