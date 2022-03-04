import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
