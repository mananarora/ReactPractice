import React, {Component} from 'react';
import {Persons} from "./Persons/Persons";
import './App.css';

class App extends Component  {
    state = {
        Persons:[
            {name:'Manan', Address:'Uttarakhand'},
            {name:'Aman', Address:'Chandigarh'},
            {name:'Vipul', Address:'India'}
        ],
        showNames:false
    };

    toggleHandler = () => {
        this.setState({
                showNames : !this.state.showNames
        });
    };

    deleteHandler = (index) => {
        //const persons = this.state.Persons.splice(); //Earlier approach of not using splice was modifying the state as it copies pointer.
        const persons = [...this.state.Persons]; // This is the best practice to copy the existing state
        persons.splice(index, 1);
        this.setState({
            Persons : persons
        });
    };

    render() {
        let persons;
        if(this.state.showNames){
            persons= (
                <div>
                    {this.state.Persons.map((person, index) => {
                        return <Persons
                            name={person.name}
                            address={person.Address}
                            click={()=>this.deleteHandler(index)}
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