import React, {Component} from 'react';
import './App.css';
import {FormattedMessage, FormattedDate} from 'react-intl';
import * as moment from 'moment'
import 'moment-timezone';

class App extends Component {
    state = {
        locale: 'en-US',
        name: 'Eric',
        unreadCount: 1000,
    };

    render() {
        return (
            <div>
                <FormattedDate
                value={moment().tz("America/Chicago").format()}
                year='numeric'
                month='short'
                day='numeric'
                hour='2-digit'
                minute='2-digit'
                hour12={false}
                timeZone='America/Chicago'
                timeZoneName='short'
            />
                <br/>
                <FormattedMessage
                    id="welcome"
                    defaultMessage={`Hello ${this.state.name}, you have ${this.state.unreadCount}`}
                />
            </div>
        );
    };
};

export default App;

//npm install moment-timezone --save
//npm install moment