import React from 'react'

export const KeyPad = (props) => {
    return (
        <div>
            <button name="9" onClick={props.clicked}>9</button>


            <button name="8" onClick={props.clicked}>8</button>


            <button namw="7" onClick={props.clicked}>7</button>


            <button name="*" onClick={props.clicked}>*</button>


            <button name="/" onClick={props.clicked}>/</button>
            <br/>


            <button name="6" onClick={props.clicked}>6</button>


            <button name="5" onClick={props.clicked}>5</button>


            <button name="4" onClick={props.clicked}>4</button>


            <button name="+" onClick={props.clicked}>+</button>


            <button name="-" onClick={props.clicked}>-</button>
            <br/>


            <button name="3" onClick={props.clicked}>3</button>


            <button name="2" onClick={props.clicked}>2</button>


            <button name="1" onClick={props.clicked}>1</button>


            <button name="C" onClick={props.clicked}>C</button>


            <button name="del" onClick={props.clicked}>del</button>
            <br/>


            <button name="0" onClick={props.clicked}>0</button>


            <button name="=" onClick={props.clicked}>=</button>


            <button name="(" onClick={props.clicked}>(</button>


            <button name=")" onClick={props.clicked}>)</button>

        </div>
    );
};