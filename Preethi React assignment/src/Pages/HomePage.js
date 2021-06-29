import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Preethi.</span>
                </h1>
                
                <p className="h-sub-text">
                To work in an organization as a team and Ambitious and self-esteemed
                engineering fresher who is capable of applying technical skills for the
                improvement of the company.
                Improved my Technical skills with the
                help of graduation in Computer Engineering and looking forward to working in
                a competitive environment that can boost my overall learning.

                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://github.com/Chillu12" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="https://youtube.com" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/preethi-bai-s-646a94194" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ld"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;