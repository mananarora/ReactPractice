import React, {Component} from 'react'
import '../App.css';

class KeyPad extends Component {
    render() {
            return (
                <div className="button">
                        <button name="(" onClick={this.props.clicked}>(</button>
                        <button name="del" onClick={this.props.clicked}>CE</button>
                        <button name=")" onClick={this.props.clicked}>)</button>
                        <button name="C" onClick={this.props.clicked}>C</button><br/>


                        <button name="1" onClick={this.props.clicked}>1</button>
                        <button name="2" onClick={this.props.clicked}>2</button>
                        <button name="3" onClick={this.props.clicked}>3</button>
                        <button name="+" onClick={this.props.clicked}>+</button><br/>


                        <button name="4" onClick={this.props.clicked}>4</button>
                        <button name="5" onClick={this.props.clicked}>5</button>
                        <button name="6" onClick={this.props.clicked}>6</button>
                        <button name="-" onClick={this.props.clicked}>-</button><br/>

                        <button name="7" onClick={this.props.clicked}>7</button>
                        <button name="8" onClick={this.props.clicked}>8</button>
                        <button name="9" onClick={this.props.clicked}>9</button>
                        <button name="*" onClick={this.props.clicked}>x</button><br/>


                        <button name="." onClick={this.props.clicked}>.</button>
                        <button name="0" onClick={this.props.clicked}>0</button>
                        <button name="=" onClick={this.props.clicked}>=</button>
                        <button name="/" onClick={this.props.clicked}>÷</button><br/>
                </div>
            );
    }
};

export default KeyPad;