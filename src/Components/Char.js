import React from 'react';

export const Char = (props) => {
    console.log(props)
    return (
        <div onClick={props.clicked}>
            {props.chars}
        </div>
    )
};