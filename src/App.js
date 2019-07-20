import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import start from './firebase';

function App() {

  useEffect( () => {
    start();
  });

  return (
    <div className="App">
      <button>Login with firebase</button>
    </div>
  );
}

export default App;
