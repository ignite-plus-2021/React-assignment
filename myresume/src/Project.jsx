import React from 'react';
function Project(props)
{
  return(
    <>
      <h3 style={{ backgroundColor:"rgb(58, 59, 59)", color:"white"}}>PROJECT NAME:  {props.name}</h3>
      <h3>DURATION:  {props.duration}</h3>
      <h3>PROJECT BRIEF:</h3>
      <ul>
        <li>{props.p1}</li>
        <li>{props.p2}</li>
      </ul>
    </>
  );
}


export default Project;
