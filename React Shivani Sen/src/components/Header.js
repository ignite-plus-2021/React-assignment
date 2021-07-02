import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper" id="home1">
            <div className="main-info">
                <h1>Hi! I am Shivani Sen</h1>
                <Typed
                    className="typed-text"
                    strings={["A computer science engineer","Know more about me","Contact me"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop 
                />
            </div>
        </div>
    )
}

export default Header
