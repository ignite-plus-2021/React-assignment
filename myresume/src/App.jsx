import React from 'react';
import './index.css';
import Opening from './Opening';
import Interest from './Interest';
import Education from './Education';
import Skills from './Skills';
import Navigation from './Navigation';
import Leftpart from './Leftpart';
import Footer from './Footer';
import Project from './Project';
function App()
{
    return(
        <>
            <Navigation />
            <div className="container">
            <div class="row">
                <div class="col-sm-3 Block1">
                    <Leftpart />
                </div>
                <div class="col-sm-9 Block">
                <Opening />
                <Interest/ >
                <Education />
                <Skills />
                <h2 style={{ backgroundColor:"steelblue"}}>PROJECTS</h2>
                <div className="jumbotron">
                  <Project name="Predicting a Startup Profit" duration="10 Days" p1="Supervised machine learning (Multiple Linear Regression Model) for predicting Startup’s profit/success" p2="From given dataset model will train itself and then predict."/>
                </div>
                <div className="jumbotron">
                  <Project name="Shopping Site" duration="2 months" p1="Created Dynamic Shopping site using HTML & CSS, Bootstrap, MySQL and PHP." p2="Functionality:-login/signup, settings, my cart, updating  number of items, about us, add new product(dynamically by administrator)"/>
                </div>
                <div className="jumbotron">
                  <Project name="Food Billing System" duration="1.5 months" p1="Implemented in C++ Language." p2="Functionality :- login/signup, select food, modify list(select more items / delete items), place the order."/>
                </div>
                <div className="jumbotron">
                  <Project name="UI/UX Design " duration="10 days" p1="Designed in FIGMA tool." p2="Created a prototype of shopping application for mobile devices"/>
                </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;