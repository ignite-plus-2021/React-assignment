import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {HashLink as Link} from "react-router-hash-link";

function Navbar() {
    return (
        <nav className ="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
  <a className="navbar-brand" href="#">Shivani Sen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        
        <Link smooth className="nav-link" aria-current="page" to="#home">Home</Link>
      </li>
      <li className="nav-item">
      <Link smooth className="nav-link" to="#about">About</Link>
      </li>
      <li className="nav-item active">
      <Link smooth className="nav-link" to="#work">Work</Link>
      </li>
      <li className="nav-item active">
      <Link smooth className="nav-link" to="#contact">Contact</Link>
      </li>
      
      
    </ul>
    
  </div>
  </div>
</nav>
    )
}

export default Navbar
