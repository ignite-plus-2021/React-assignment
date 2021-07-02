import React from "react";
import Seperator from "../../common/social-contact/seperator/Seperator";
import SocialContact from "../../common/social-contact/SocialContact";
import "./Contact.css";

function Contact() {
  return (
    <div className="conact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <p className="contact-para">Get in touch!</p>
        <SocialContact />
      </div>
    </div>
  );
}

export default Contact;
