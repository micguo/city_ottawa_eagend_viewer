import React from 'react';
import ReactDOM   from 'react-dom';
import AppHeader from './Header/index.jsx';
import AppFooter from './Footer/index.jsx';

ReactDOM.render(
    <div>
        <header><AppHeader/></header>
        <div>Content</div>
        <footer><AppFooter/></footer>
    </div>,
    document.getElementById('app')
);