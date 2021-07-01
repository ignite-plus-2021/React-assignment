import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Resume from './resume';


const Main = () => (
  <Switch>
    
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
