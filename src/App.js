import React from 'react';
import Base from 'terra-base';
import { FormattedMessage } from 'react-intl';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';

const Toggle = () => (
    <button type="button">
        <FormattedMessage id="App.toggle" />
    </button>
);

const App = () => (
    <div>
        <Base locale="en">
            <Toggle />
            <DemographicsBanner
                applicationContent={<span className="risk-score">5%</span>}
                age="25 Years"
                dateOfBirth="May 9, 1993"
                gender="Male"
                gestationalAge="April 5, 2016"
                identifiers={{ MRN: 12343, REA: '3JSDA' }}
                photo={<Image alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
                personName="Johnathon Doe"
                postMenstrualAge="April 7, 2016"
                preferredFirstName="John"
            />
        </Base>
    </div>
);

export default App;