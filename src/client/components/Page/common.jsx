import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Meetings from './meetings.jsx';

import CSS from './style.css';

export default class CommonPage extends React.Component {
    render() {
        return (
            <div id="page-content">
                <Switch>
                    <Route exact={true} path="/" render={() => (<div>Home</div>)} />
                    <Route path="/meetings" render={() => (
                        <Meetings></Meetings>
                    )}/>
                    <Route path="/about" render={() => (<div>about</div>)} />
                </Switch>
            </div>
        );
    }
}
