import React, { useEffect } from "react";
import "./App.css";
import start from "./firebase";

function App() {
    useEffect(() => {});

    const handleClick = () => {
        start();
    };

    return (
        <div className="App">
            <button onClick={() => handleClick()}>Login with firebase</button>
        </div>
    );
}

export default App;
