import React, {Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import EducationPage from './Pages/EducationPage';





 function App() {
  
  return (
    <div className="App">
      <div className="sidebar">
      <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Router path="/" exact>
              <HomePage />
            </Router>
            <Router path="/about" exact>
              <AboutPage />
            </Router>
            <Router path="/contact" exact>
              <ContactPage />
            </Router>
            <Router path="/education" exact>
              <EducationPage />
            </Router>
          </Switch>
        </div>
       

      </div>
    </div>
  );
}


export default App;
