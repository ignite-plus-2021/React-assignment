import React from "react";
import "./App.css";
import Navbar from "./resumeComponents/Navbar/navIndex.js";


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import  "./Pages";
//import Home from '.\Pages';
import Personalinfo from "./Pages/Personalinfo.js";
import Skills from "./Pages/Skills.js";
import Projects from "./Pages/Projects.js";
import Education from "./Pages/Education.js";


function App() {
return (
	<Router>
	<Navbar/>
  <div className='row'>
    
      
      </div>
	<Switch>
	    <Route exact path='/'  component={Education}/>
		<Route path='/Personalinfo' component={Personalinfo} />
		<Route path='/Skills' component={Skills} />
		<Route path='/Projects' component={Projects} />
		
	</Switch>
	
	</Router>
	
);
}

export default App;
// 
