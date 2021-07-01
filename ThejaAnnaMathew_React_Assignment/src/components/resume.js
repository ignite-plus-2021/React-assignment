import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Project from './project';
import Skills from './skills';
import logo from "../theja.png"


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={logo}
                alt="avatar"
                style={{height: '400px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Theja Anna Mathew</h2>
            <h4 style={{color: 'grey'}}>Engineering Student | Web developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a 3rd Year Computer Science and Engineering student from LBS INSTITUTE TECHNOLOGY FOR WOMEN. I like solving problems and like to explore new technologies. I was GoogleCloudReady Facilitator at my college.I am a determined ,optimistic, self motivated person. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>CRRA 14A,PATTOM</p>
            <h5>Phone</h5>
            <p>9074529526</p>
            <h5>Email</h5>
            <p>thejaannamathew.com</p>
            <h5>Date of Birth</h5>
            <p>October 18, 2000</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
                 startYear={2021}
                 //endYear={present}
                 schoolName="Student Attendee at IGNITE+"
                 schoolDescription="Training program for Women Engineers by Target"
                  />
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="LBS Institute of 
              Technology for 
              Women, 
              Trivandrum"
              schoolDescription="Pursuing B-TECH in 
              Computer Science & 
              Engineering"
               />

               <Education
                 startYear={2012}
                 endYear={2018}
                 schoolName="ST MARY’S 
                 HIGHER 
                 SECONDARY 
                 SCHOOL 
                 PATTOM "
                 schoolDescription="Completed 10th and 12th from St Mary's , with 93% and 96.25% respectively"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Projects</h2>

            <Project
              
              projectName="Home Automation System Using IOT"
              projectDescription="Developed an IOT project to control electronic devices at home remotely"
              />

              <Project
      
                projectName="Hospital Database Mangement System"
                projectDescription="Developed Hospital Database Mangement System, to make hospitals fully Digital"
                />
                 <Project
      
                 projectName="Portfolio"
                 projectDescription="Designed and developed this portfolio project"
               />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="c"
                    progress={80}
                    />
                    <Skills
                    skill="c++"
                    progress={75}
                    />
                    <Skills
                    skill="Java"
                    progress={80}
                    />
                    <Skills
                    skill="Mysql"
                    progress={45}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
