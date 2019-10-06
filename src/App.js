import React, {Component} from 'react';
import './App.css';
import KeyPad from "./Components/Keypad";
import Display from "./Components/Display";

class App extends Component  {

    state = {
      display : ""
    };
    handleClick = (event) => {
        let button = event.target.name;
        if(button === "=") {
            this.calculate();
        }
        else if(button === "del") {
            this.delete();
        }
        else if(button === "C") {
            this.setState({
                display : ""
            })
        }
        else {
            this.setState({
                display : this.state.display + button
            });
        }
    };
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                display: (eval(this.state.display)) + ""
            })
        } catch (e) {
            this.setState({
                display: "error"
            })

        }
    };
    delete = () => {
        this.setState({
            display : this.state.display.slice(0,-1)
        })
    };
    render() {
        return (
            <div className='calculator-body'>
                <h1>Calculator</h1>
                <Display display={this.state.display}/>
                <KeyPad clicked={this.handleClick}/>
            </div>
        );
    }
}

export default App;