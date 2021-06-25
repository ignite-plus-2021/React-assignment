import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import Internship from './Components/Internship/Internship';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <div className="sidenav">
      <Profile></Profile>
    </div>
    <div className="header">
      <Header />
    </div>
    
    
    
    
    <div className="footer">
      <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
