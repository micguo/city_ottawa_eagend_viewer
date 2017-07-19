import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class Pager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPages: Math.floor(parseInt(props.totalItems) / parseInt(props.pageSize)),
            currentPage: parseInt(props.currentPage)
        };
    }

    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps);

        this.setState({
            totalPages: Math.floor(parseInt(nextProps.totalItems) / parseInt(nextProps.pageSize)),
            currentPage: parseInt(nextProps.currentPage)
        });
    }

    handlePrevious = () => {
        this.setState({currentPage: ((this.state.currentPage - 1) < 0) ? 0 : (this.state.currentPage - 1)});
    };
    handleNext = () => {
        console.log(this.state);
        this.setState({currentPage: ((this.state.currentPage + 1) > this.state.totalPages) ? this.state.totalPages : (this.state.currentPage + 1)});
    };
    handleFirst = () => {
        this.setState({currentPage: 0});
    };
    handleLast = () => {
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
