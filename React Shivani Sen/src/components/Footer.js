import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faBlogger
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="contact-footer" id="contact">
            <h5>Shivani©2021</h5><h3>Connect With Me </h3>
            

                <a href="https://unlockingdoor.blogspot.com/?m=1" target="_blank" 
                className="blogger-social">
                <FontAwesomeIcon icon = {faBlogger} size="2x"/>
                </a>
                <a href="https://github.com/Shivanisen16" target="_blank" 
                className="github-social">
                <FontAwesomeIcon icon = {faGithub} size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/shivani-sen-a00ab3195/" target="_blank" 
                className="linkedin-social">
                <FontAwesomeIcon icon = {faLinkedin} size="2x"/>
                </a>
                
                
            </div>
        </>
    )
}

export default Footer
