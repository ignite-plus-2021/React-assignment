import React from "react";


function About() {
    return (
        <>
        <section className="about-me" id="about">
            <h1>About Me
            <p>_____</p></h1>
            <div className="container">
                <div className="about-me-container">
                    <div className="about-img">
                        <img src="images/profilepic.jpg" alt="profile pic" className="about-img-container"/>
                    </div>
                    <div className="about-text">
                        <p>Hi! I am a computer science student pursuing engineering from Sir MVIT College (2018-Present)
                        
                        I have knowledge of software engineering subjects like Data Structures, Algorithms, DBMS, Operating System, Computer Networks etc.
                        <p>I am an enthuisatic coder and love problem solving.
                        I am exploring more into web development.</p> <p>I feel a great belonging in knowing others' perspectives and stories and sharing mine too.
                        So, I have a keen interest in poetries,reading,writing and blogging.</p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About

