import React from 'react'
import "./About.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import aboutVector from "./../../assets/about_vector.png"
import aboutAnime from "./../../assets/about.gif"

const About=()=> {
    return (
        <div className="section-container">
            <Heading
            heading="About Me"
            details="Computer Engineer"
            ></Heading>

            <div className="vector-image">
                <img src={aboutVector} alt="About-bg" className="about-image" />
            </div>

            <div className="about-section">
                <div className="left-container">
                    <p>I am a 3rd year Undergraduate (2018-2022) pursuing B.Tech from Cummins college of Engineering for women, pune in Computer Engineering.</p>
                    <p>I am currently interning at Research and development center in Schneider Electric as a software developer.  </p>
                    <p>I am also participating in Ignite plus program by target India and CitiBridge program by Citibank </p>
                </div>
                <div className="right-container">
                    <img className="about-anime" src={aboutAnime} alt="About"></img>
                </div>
                

            </div>
            <Footer
            phrase="Check out my "
            link="Projects!"
            address="/projects"
            >
            </Footer>
        </div>

    )
}
export default About;
