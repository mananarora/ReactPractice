import React from 'react';

export const Persons = (props) => {
    return (
        <div>
            <p onClick={props.click}>
                {props.name}
                {props.address}
            </p>
        </div>
    );
};