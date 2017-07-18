import React from 'react';
import ReactDOM   from 'react-dom';
import AppHeader from './Header/index.jsx';
import AppFooter from './Footer/index.jsx';
import AppContent from './Page/common.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './layout.css';

let menuItems = [
    {
        'title': 'meetings',
        'uri': '/meetings'
    },
    {
        'title': 'about',
        'uri': '/about'
    }
];

injectTapEventPlugin();

ReactDOM.render(
    <BrowserRouter>
        <div id="body-content">
            <header><AppHeader menuItems={menuItems}/></header>
            <MuiThemeProvider>
                <AppContent/>
            </MuiThemeProvider>
            <footer><AppFooter/></footer>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);