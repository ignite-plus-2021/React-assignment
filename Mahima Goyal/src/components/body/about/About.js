import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I am <br />
          <span className="info-name">Mahima Goyal</span> <br /> <span className="subtitle">Final-year Engineering Student</span>
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/mahima.png").default} className="picture" alt="mahima" />
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContact />
    </div>
  );
}

export default About;
