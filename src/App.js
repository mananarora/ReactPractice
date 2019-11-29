import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/string';
import 'core-js/stable'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'raf/polyfill';

import React, {Component} from 'react';
import Base from 'terra-base';
import {FormattedDate} from 'react-intl';
import moment from "moment";
import "moment-timezone";

class App extends Component {
    render() {
        debugger;
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
                        timeZoneName='short'
                    />;
                </Base>
            </div>
        );
    };
};

export default App;