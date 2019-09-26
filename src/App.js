import React, {Component} from 'react';
import './App.css';
import {KeyPad} from "./Components/Keypad";
import {Display} from "./Components/Display";

class App extends Component  {

    state = {
      value : ['df']
    };
    handleClick = (event) => {
        this.setState({
            value : event.target.value
        });
    };
    render() {
        return (
            <div>
                <Display value={this.state.value}/>
                <KeyPad clicked={(event) => this.handleClick(event)}/>
            </div>
        );
    }
}

export default App;