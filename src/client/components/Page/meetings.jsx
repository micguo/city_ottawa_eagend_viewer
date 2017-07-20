import React from 'react';
import setting from 'setting.json';
import Pager from '../Pager/index.jsx';
import {withRouter} from 'react-router-dom'


class Meetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {meetings: []};
    }

    getDataPromise(page) {
        let url = setting.api + '/api/meeting?page=' + page;
        let request = new Request(url, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        });

        return fetch(request);
    }

    fetchData = () => {
        let params = new URLSearchParams(location.search);
        let page = params.get('page');
        page = (page !== null) ? page : 0;
        let meetingFetchingPromise = this.getDataPromise(page);
        meetingFetchingPromise
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                this.setState({meetings: data.data, totalPages: data.pages, currentPage: data.page});
            })
    };

    componentWillMount = () => {
        this.fetchData()
    };

    componentWillReceiveProps(nextProps) {
        this.fetchData()
    }

    render() {
        return (
            <div>
                {this.state.meetings.map(meeting =>
                    <div key={meeting.id}>
                        <h2><a target="blank" href={setting.officialEagendaMeetingUrl + meeting.id}>{meeting.title}</a></h2>
                        <div>{(new Date(meeting.date)).toLocaleDateString()}</div>
                    </div>
                )}
                <Pager totalPages={this.state.totalPages}/>
            </div>
        );
    }
}

export default withRouter(Meetings)
