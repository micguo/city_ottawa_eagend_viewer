import React from 'react';
import {withRouter} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import CSS from './style.css';

class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedMenuItem: 0
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleMenuChange = function(value, menuItem) {
        this.setState({selectedMenuItem: value});
        this.props.history.push(menuItem.uri);
    };

    render() {
        return (
            <div>
                <FontIcon
                    className="material-icons button menu-button"
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                >menu</FontIcon>
                <Drawer open={this.state.open}>
                    <h1>Ottawa eAgenda</h1>
                    <Menu value={this.state.selectedMenuItem} multiple={false}>
                        {
                            this.props.menuItems.map((menuItem, index) => {
                                return <MenuItem key={index} onClick={() => {this.handleMenuChange(index, menuItem)}} value={index} primaryText={menuItem.title}/>;
                            })
                        }
                    </Menu>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(DrawerSimpleExample)
