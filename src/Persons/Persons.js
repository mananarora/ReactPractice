import React from 'react';

export const Persons = (props) => {
    return (
        <div>
            <p onClick={props.click}>
                {props.name}<br/>
                {props.address}
            </p>
            <input type="text" onChange={props.handleChange} value={props.name}/>
        </div>
    );
};