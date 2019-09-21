import React, {useState} from 'react';
import Person from "./Persons/Person.js"
import './App.css';

const App = () => {
    const [form, setFormState] = useState({
        FirstName: "",
        Age: "",
        Fruit: ""
    });

    const [newstate, setNewState] = useState('hello');

    const handleChange = (event) => {
        setFormState({
            [event.target.name]: event.target.value
        });
        console.log(form,newstate);
    };

    return (
        <div className="App">
            <form>
                <h1>Hello {form.FirstName} {form.Age}</h1>
                Name: <input type="text" name="FirstName" placeholder="first name" onChange={handleChange}/>
                <br/>
                Age: <input type="text" name="Age" placeholder="age" onChange={handleChange}/>
            </form>

            <select name="Fruit" onChange={handleChange}>
                <option selected disabled hidden>Choose here</option>
                <option>apple</option>
                <option>orange</option>
                <option>mango</option>
            </select>
            <Person name={form.FirstName} age={form.Age} fruit={form.Fruit}/>
        </div>
    );
};

export default App;

