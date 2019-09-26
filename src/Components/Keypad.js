import React from 'react'

export const KeyPad = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <button onClick={props.clicked}>9</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>8</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>7</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>*</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>/</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.clicked}>6</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>5</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>4</button>
                    </td>
                    <td>
                        <button onClick={props.clicked}>+</button>
                    </td>
                    <td>
                        <button>-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>3</button>
                    </td>
                    <td>
                        <button>2</button>
                    </td>
                    <td>
                        <button>1</button>
                    </td>
                    <td>
                        <button>C</button>
                    </td>
                    <td>
                        <button>del</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>0</button>
                    </td>
                    <td>
                        <button>=</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};