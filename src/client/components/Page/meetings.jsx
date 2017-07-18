import React from 'react';
import setting from 'setting.json';
import Pager from '../Pager/index.jsx';

export default class Meetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {meetings: []};
    }

    getDataPromise() {
        let url = setting.api + '/api/meeting';
        console.log(url);
        let request = new Request(url, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        });

        return fetch(request);
    }

    componentWillMount() {
        let meetingFetchingPromise = this.getDataPromise();
        meetingFetchingPromise
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                console.log(data);
                this.setState({meetings: data.data});
            })
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
                <Pager/>
            </div>
        );
    }
}
