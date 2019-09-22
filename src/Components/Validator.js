import React from 'react';

export const Validator = (props) => {
    let validationMessage = "text too long";

    if (props.len < 5) {
        validationMessage = "text too short"
    }
    return (
        <div>
             {/*{ props.len < 5 ? <p>Text too short</p> : <p>Text too long</p> }*/}
            {validationMessage}
        </div>
    )
};