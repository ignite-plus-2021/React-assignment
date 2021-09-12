import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/Resume'  component={Resume}/>
   </Switch>
   </Router>
     )
  }

export default App;