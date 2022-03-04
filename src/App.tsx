import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/partials/Footer/Footer';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
