import React, {Component} from 'react'
import './Header.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Education from '../Education/Education'
import Internship from '../Internship/Internship'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import About from '../About/About'
import { Route,BrowserRouter as Router,Link } from "react-router-dom";



class  Header extends Component 
{
    render(){    return (
        <Router>
        <div className="header-span" >
            <span >
                    <span className="nav"><Link to="/" className="nav"></Link></span>
                    <span className="nav"><Link to="/profile" className="nav">Personal Info</Link></span>
                    <span className="nav"><Link to="/education" className="nav">Education</Link></span>
                    <span className="nav"><Link to="/internship" className="nav">Internship</Link></span>
                    <span className="nav"><Link to="/skills" className="nav">Skills</Link></span>
                    <span className="nav"><Link to="/contact" className="nav">Contact</Link></span>
                
            </span>
            <Route  exact path="/" component={About}/>
            <Route  exact path="/profile" component={PersonalInfo}/>
            <Route path="/education" component={Education}/>
            <Route path="/internship" component={Internship}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>

        </div>
        
        </Router>
    )
    }
}
export default Header