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
        let persons;
        if(this.state.showNames){
            persons= (
                <div>
                    {this.state.Persons.map(person => {
                        return <Persons
                            name={person.name}
                            address={person.Address}
                        />
                    })};
                </div>
            )
        }
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
                {persons}
            </div>
        );
    }
}

export default App;