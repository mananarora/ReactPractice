import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "moment-timezone";

import "./index.css";

function App() {
    return (
        <div className="App">
                {moment().tz("America/Chicago").format()}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);