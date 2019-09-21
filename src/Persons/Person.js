import React from "react"

const Person = (props)=> {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h3>{props.fruit}</h3>
        </div>
    );
};

export default Person;