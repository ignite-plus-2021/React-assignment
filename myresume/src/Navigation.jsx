import React from 'react';

function Navigation(){
    return(
        <>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#">Resume</a>
                    </div>
                    <ul class="nav navbar-nav navbar-collapse" id="myNavbar">
                    <li><a href="#">Objective</a></li>
                    <li><a href="#">Area Of Interest</a></li>
                    <li><a href="#">Educational Details</a></li>
                    <li><a href="#">Computing Skills</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;