import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Footer from './components/footer/Footer';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Portfolios from './components/pages/portfolios/Portfolios';
import Contact from './components/pages/contact/Contact';
import Personal_information from './components/pages/personal_information/Personal_information';


function App() {
  return (
    <Router>

      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/personal_information" component={Personal_information} />
      <Switch>

        <Route path="/experiences" component={Experiences} />
        <Route path="/educations" component={Educations} />
      </Switch>

    </Router>
  );
}

export default App;
