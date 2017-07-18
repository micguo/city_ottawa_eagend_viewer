import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class Pager extends React.Component {
    render() {
        return (
            <div>
                <IconButton tooltip="Font Icon">
                    <FontIcon className="muidocs-icon-image-navigate-before" />
                </IconButton>
                <IconButton tooltip="Font Icon">
                    <FontIcon className="muidocs-icon-image-navigate-next" />
                </IconButton>
            </div>
        );
    }
}
