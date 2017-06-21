import React from 'react';
import Drawer from './Drawer/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSS from './style.css';

export default class appHeader extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Drawer menuItems={this.props.menuItems}/>
                </MuiThemeProvider>
                <h1 id="title">Ottawa eAgenda</h1>
            </div>
        );
    }
}
