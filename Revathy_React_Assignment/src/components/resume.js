import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Project from './projects';
import logo from "../Revathy Jayakumar.jpeg"


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
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Revathy Jayakumar</h2>
            <h4 style={{color: 'grey'}}>Engineering student </h4>
            <hr style={{borderTop: '3px solid #438351', width: '50%'}}/>
            <p>I am a 3rd year student at LBS Institute of Technology for Women,Kerala.My interesting fields are Internet of Things(IoT) and Machine Learning(ML).
            I am ready to utilize my skills to grab knowledge and work with an esteemed organization which
            provides me a platform to use my skills for the benefit of the company as well as myself.
            </p>
            <hr style={{borderTop: '3px solid #438351', width: '50%'}}/>
            <h5>Address</h5>
            <p>TC 42/138(2),CLRA-62,
              “KEDARAM”,Cheppil Lane,
               Sreevaraham,Manacaud P.O
               Trivandrum,Kerala</p>
            <h5>Phone</h5>
            <p>6282555472</p>
            <h5>Email</h5>
            <p>revathyanu02@gmail.com</p>
            <h5>Date of Birth</h5>
            <p>02 May 2000</p>
            <hr style={{borderTop: '3px solid #438351', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2022}
              schoolName="LBS Institute of Technology
                          for Women"
              schoolDescription="Pursuing 3rd year in Computer Science and Engineerig"
               />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="GMGHSS,Pattom"
                 schoolDescription="Completed my 12th grade"
                  />
                <Education
                 //startYear={}
                 endYear={2016}
                 schoolName="Arya Central School,Pattom"
                 schoolDescription="Completed my 10th grade"
                  />
                <hr style={{borderTop: '3px solid #438351'}} />

                <h2>Projects and Achievements</h2>
                <Project 
                 projectName="Energy saving System"
                 projectDescription="Implemented an Energy-Saving System using IoT"
                 />

                <div>
                  <strong>Website link:</strong> <a href="https://www.hackster.io/revathy-jayakumar/save-light-energy-using-iot-bd32e3" alt='sbs'>https://www.hackster.io/revathy-jayakumar/save-light-energy-using-iot-bd32e3/</a>
                </div>
                 
                 <Project 
                 projectName="Home Automation System Using IOT"
                 projectDescription="Developed an IOT project to control electronic devices at home remotely"
                 />
                 <Project 
                 projectName="Insurance Cost prediction"
                 projectDescription="Project on the prediction for Medical Cost Insurance using Machine Learning"
                 />
                 <Project 
                 projectName="INGENIOUS-2020"
                 projectDescription="Implemented a Home Automation System using IoT and Secured Second Prize in the Idea
                                    Competition INGENIOUS-2020 Organized by Department of Computer Science and
                                    Engineering, SNGIST GROUP OF INSTITUTIONS, N.Paravur,Kerala."
                 />
                 
                 <hr style={{borderTop: '3px solid #438351'}} />

              <h2>Skills</h2>
              <Skills
                skill="IoT"
                progress={85}
              />
              <Skills
                skill="Machine Learning"
                progress={80}
              />
              <Skills
                skill="HTML/CSS"
                progress={75}
              />
              <Skills
                skill="C/C++"
                progress={70}
              />
              <Skills
                skill="DBMS"
                progress={70}
              />
              <Skills
                skill="Java"
                progress={65}
              />
              <Skills
                skill="DS Algorithm"
                progress={65}
              />
              
          

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
