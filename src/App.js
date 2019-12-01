import React, {Component} from 'react';
import Base from 'terra-base';
import {FormattedDate} from 'react-intl';
import moment from "moment";
import "moment-timezone";

class App extends Component {
    render() {
        return (
            <div>
                <Base locale="en">
                    <FormattedDate
                        value={moment().tz('America/Chicago').format()}
                        year='numeric'
                        month='short'
                        day='numeric'
                        hour='2-digit'
                        minute='2-digit'
                        hour12={false}
                        timeZone='America/Chicago"'
                        timeZoneName='America/Chicago'
                    />;
                </Base>
            </div>
        );
    };
};

export default App;