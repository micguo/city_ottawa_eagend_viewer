import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {withRouter} from 'react-router-dom'

class Pager extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps)
    {
        let params = new URLSearchParams(nextProps.location.search);
        this.setState({
            currentPage: parseInt(params.get('page')),
            totalPages: parseInt(nextProps.totalPages)
        });
    }

    handlePrevious = () => {
        this.props.history.push(location.pathname + '?page=' + (((this.state.currentPage - 1) < 0) ? 0 : (this.state.currentPage - 1)));
        this.setState({currentPage: ((this.state.currentPage - 1) < 0) ? 0 : (this.state.currentPage - 1)});
    };
    handleNext = () => {
        this.props.history.push(location.pathname + '?page=' + (((this.state.currentPage + 1) > this.state.totalPages) ? this.state.totalPages : (this.state.currentPage + 1)));
        this.setState({currentPage: ((this.state.currentPage + 1) > this.state.totalPages) ? this.state.totalPages : (this.state.currentPage + 1)});
    };
    handleFirst = () => {
        this.props.history.push(location.pathname + '?page=0');
        this.setState({currentPage: 0});
    };
    handleLast = () => {
        this.props.history.push(location.pathname + '?page=' + this.state.totalPages);
        this.setState({currentPage: this.state.totalPages});
    };

    render() {
        return (
            <div>
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
