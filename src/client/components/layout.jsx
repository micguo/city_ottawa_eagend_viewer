import React from 'react';
import ReactDOM   from 'react-dom';
import AppHeader from './Header/index.jsx';
import AppFooter from './Footer/index.jsx';
import Drawer from './Drawer/index.jsx';
import styles from './layout.css';

ReactDOM.render(
    <div id="body-content">
        <header><AppHeader/></header>
        <Drawer />
        <footer><AppFooter/></footer>
    </div>,
    document.getElementById('app')
);