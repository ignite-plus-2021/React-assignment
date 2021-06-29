import React from 'react';
import "./Skilldesign.css";

//const Skills = () => 
export default function Skills(){
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh',
        
	}}
	>
	<div class="container">
    <h1><b>Skill Set</b></h1>
    <div class="bar learning" data-skill="Reactjs"></div>
    <div class="bar learning" data-skill="Springboot"></div>
    <div class="bar back basic" data-skill="C#"></div>
    <div class="bar back intermediate" data-skill="Java"></div>
    <div class="bar front advanced" data-skill="C"></div>
    <div class="bar back intermediate" data-skill="HTML5"></div>
    <div class="bar back basic" data-skill="CSS"></div>
    </div>
    </div>
);
};

//export default Skills;
