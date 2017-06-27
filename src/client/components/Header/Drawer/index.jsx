import React from 'react';
import {withRouter, Route, Link} from 'react-router-dom'
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

    handleMenuChange = function(value) {
        this.setState({selectedMenuItem: value});
        switch (value) {
            case 0:
                this.props.history.push('/meetings');
                break;
            case 1:
                this.props.history.push('/about');
                break;
        }
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
                                return <MenuItem key={index} onClick={() => {this.handleMenuChange(index)}} value={index} primaryText={menuItem.title}/>;
                            })
                        }
                    </Menu>
                </Drawer>
                <Link to="/meetings">Meetings</Link>
                <Link to="about">About</Link>
                <Route path="/meetings" render={() => (<div>meeting</div>)} />
                <Route path="/about" render={() => (<div>about</div>)} />
            </div>
        );
    }
}

export default withRouter(DrawerSimpleExample)
