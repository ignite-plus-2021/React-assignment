import NavMenu from './Components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App(){
  return (
    <div id='App'>      
      <Router>
        <NavMenu/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/experience">
            <Experience/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>

      </Router>
         
    </div>
  );
}

export default App;
