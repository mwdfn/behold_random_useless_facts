import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RandomFacts from './Containers/RandomFacts';

function App() {
  return (
    <div className="App">
      <RandomFacts/>
    </div>
  );
}

export default App;
