import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';

import configStore from './store/store';
import ImageGrid from "./Components/ImageGrid/ImageGrid";

const store = configStore();

class App extends Component  {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ImageGrid/>
                </div>
            </Provider>
        );
    }
}

export default App;