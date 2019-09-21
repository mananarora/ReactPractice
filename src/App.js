import React, {Component} from 'react';
import {Persons} from "./Persons/Persons";
import './App.css';

class App extends Component {
    state = {
        Persons: [
            {id:'1', name: 'Manan', Address: 'Uttarakhand'},
            {id:'2', name: 'Aman', Address: 'Chandigarh'},
            {id:'3', name: 'Vipul', Address: 'India'}
        ],
        showNames: false
    };

    toggleHandler = () => {
        this.setState({
            showNames: !this.state.showNames
        });
    };

    deleteHandler = (index) => {
        //const persons = this.state.Persons.slice(); //Earlier approach of not using slice was modifying the state as it copies pointer.
        const persons = [...this.state.Persons]; // This is the best practice to copy the existing state
        persons.splice(index, 1);
        this.setState({
            Persons: persons
        });
    };

    handleChange = (event, id) => {
        const personIndex = this.state.Persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.Persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.Persons];
        persons[personIndex] = person;

        this.setState({
            Persons : persons
        })
    };

    render() {
        let persons;
        if (this.state.showNames) {
            persons = (
                <div>
                    {this.state.Persons.map((person, index) => {
                        return <Persons
                            name={person.name}
                            address={person.Address}
                            click={() => this.deleteHandler(index)}
                            handleChange={(event) => this.handleChange(event, person.id)}
                            key={person.id} // just to remove console warning for unique props and key
                        />
                    })}
                </div>
            )
        }
        return (
            <div className="App">
                <button onClick={this.toggleHandler}>Toggle Names</button>
                {persons}
            </div>
        );
    }
}

export default App;