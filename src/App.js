import React, {Component} from 'react';
import './App.css';
import {KeyPad} from "./Components/Keypad";
import {Display} from "./Components/Display";

class App extends Component  {

    state = {
      display : ""
    };
    handleClick = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    render() {
        return (
            <div>
                {/*<Display value={this.state.value}/>*/}
                <KeyPad clicked={this.handleClick}/>
            </div>
        );
    }
}

export default App;