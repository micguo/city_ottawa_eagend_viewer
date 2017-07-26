import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {withRouter} from 'react-router-dom'

class Pager extends React.Component {

    constructor(props) {
        super(props);
    }

    updatePageByUrl = () => {
        let params = new URLSearchParams(location.search);
        let page = params.get('page');
        page = (page !== null) ? page : 0;
        let newState = {
            currentPage: parseInt(page),
            totalPages: parseInt(this.props.totalPages)
        };
        this.setState(newState);
    };

    componentWillMount = () => {
        this.updatePageByUrl();
    };

    componentWillReceiveProps(nextProps)
    {
        this.updatePageByUrl();
    }

    handlePrevious = () => {
        this.props.history.push(location.pathname + '?page=' + (((this.state.currentPage - 1) < 1) ? 1 : (this.state.currentPage - 1)));
    };
    handleNext = () => {
        this.props.history.push(location.pathname + '?page=' + (((this.state.currentPage + 1) > this.state.totalPages) ? this.state.totalPages : (this.state.currentPage + 1)));
    };
    handleFirst = () => {
        this.props.history.push(location.pathname + '?page=1');
    };
    handleLast = () => {
        this.props.history.push(location.pathname + '?page=' + this.state.totalPages);
    };

    render() {
        return (
            <div  className="pager">
                <IconButton tooltip="First Page" onClick={this.handleFirst}>
                    <FontIcon className="material-icons button menu-button">first_page</FontIcon>
                </IconButton>
                <IconButton tooltip="Previous" onClick={this.handlePrevious}>
                    <FontIcon className="material-icons button menu-button">chevron_left</FontIcon>
                </IconButton>
                <IconButton tooltip="Next" onClick={this.handleNext}>
                    <FontIcon className="material-icons button menu-button">chevron_right</FontIcon>
                </IconButton>
                <IconButton tooltip="Last Page" onClick={this.handleLast}>
                    <FontIcon className="material-icons button menu-button">last_page</FontIcon>
                </IconButton>
            </div>
        );
    }
}

export default withRouter(Pager)
