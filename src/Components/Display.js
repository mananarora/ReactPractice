import React from 'react'
import '../App.css';

const Display = (props) => {
    let result = props.display;
    return (
        <div className="display">
            <p>{result}</p>
        </div>
    )
};

export default Display;