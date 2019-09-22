import React, {Component} from 'react';
import './App.css';
import {Validator} from "./Components/Validator";
import {Char} from "./Components/Char";

class App extends Component {

    state = {
        char : ""
    };

    handleChange = (event) => {
        this.setState({
            char : event.target.value
        });
    };

    deleteHandler = (index) => {
        let charList = [...this.state.char];
        charList.splice(index,1);
        let char = charList.join('');
        this.setState({
            char:char
        });
    };

    render() {
        const charList = this.state.char.split('').map((ch, index) => {
            return (
                <Char
                    chars = {ch}
                    clicked = {
                        () => {this.deleteHandler(index)}
                    }
                />
            )
        });
        return (
            <div className="App">
                <input type="text" onChange={this.handleChange} value={this.state.char}/>
                <p>{this.state.char} </p>
                <Validator len = {this.state.char.length} />
                {charList}
            </div>
        );
    }
}

export default App;