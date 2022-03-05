import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ScrollTopButton from './components/atoms/ScrollTopButton/ScrollTopButton';
import EmptyPage from './components/pages/EmptyPage/EmptyPage';
import HomePage from './components/pages/HomePage/HomePage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import Footer from './components/partials/Footer/Footer';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
        <Footer />
      </Router>
      <ScrollTopButton />
    </div>
  );
}

export default App;
