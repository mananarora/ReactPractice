import React from 'react';

export const Persons = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
        </div>
    );
};