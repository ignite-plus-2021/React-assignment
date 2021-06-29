import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ButtonAppBar from './components/header';
import StickyFooter from './components/footer';
import Project from './components/projects';
import Education from './components/education';
import AboutMe from './components/about';
import Experience from './components/experience';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Skills from './components/skills';
import Contacts from './components/contact';
import Home from './components/home';



const theme = createMuiTheme();

theme.spacing(2)

function App() {
    return (
      <Router >
        <div >
          <ButtonAppBar / >
          <Switch >
            <Route path = "/" exact component = { Home }/ >
            <Route path = "/about" component = { AboutMe }/ >
            <Route path = "/education" component = { Education }/ >
            <Route path = "/experience" component = { Experience }/ >
            <Route path = "/skills" component = { Skills } / >
            <Route path = "/contacts"component = { Contacts }/ >
          </Switch>
          <StickyFooter / >
          
        </div>
      </Router>
    );
}

export default App;
