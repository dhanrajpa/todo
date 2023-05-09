import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <h2>To Do App</h2>
      <Main />
      <Login />
    </div>
  );
}

export default App;
