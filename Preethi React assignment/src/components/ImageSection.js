import React from 'react';
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Preethi Bai S</span></h4>
                <p className="about-text">
                    Currently persuing Bachelor of engineering in Sir M. Visvesvaraya Institute of Technology Department of Computer Science & Engineering.Banglore
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Preethi Bai S</p>
                        <p>: 21</p>
                        <p>: INDIA</p>
                        <p>:  English , Kannada, Hindi</p>
                        <p>: Sri Sevalal Nagar ,Savalanga Road Navule Shimogga</p>
                        
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;