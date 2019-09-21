import React, {Component} from 'react';
import Person from "./Persons/Person.js";
import {Persons} from "./Persons/Persons";
import './App.css';

class App extends Component  {
    state = {
        FirstName:"",
        Age:"",
        Fruit:"",
        Persons:[
            {name:'Manan', Address:'Uttarakhand'},
            {name:'Aman', Address:'Chandigarh'},
            {name:'Vipul', Address:'India'}
        ],
        showNames:false
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    toggleHandler = () => {
        this.setState({
                showNames : !this.state.showNames
        });
    };

    render() {
        return (
            <div className="App">
                <form>
                    <h1>Hello {this.state.Persons[0].name}</h1>
                    Name: <input type="text" name="FirstName" placeholder="first name" onChange={this.handleChange}/>
                    <br/>
                    Age: <input type="text" name="Age" placeholder="age" onChange={this.handleChange}/>
                </form>

                <select name="Fruit" onChange={this.handleChange}>
                    <option selected disabled hidden>Choose here</option>
                    <option>apple</option>
                    <option>orange</option>
                    <option>mango</option>
                </select>
                <Person name={this.state.FirstName} age={this.state.Age} fruit={this.state.Fruit} />
                <button onClick={this.toggleHandler}>Toggle Names</button>
                {
                    this.state.showNames ?
                    <div>
                        <Persons
                            name={this.state.Persons[0].name}
                            address={this.state.Persons[0].Address}/>
                        <Persons
                            name={this.state.Persons[1].name}
                            address={this.state.Persons[1].Address}/>
                        <Persons
                            name={this.state.Persons[2].name}
                            address={this.state.Persons[2].Address}/>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;