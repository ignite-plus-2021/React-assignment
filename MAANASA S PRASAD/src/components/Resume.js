import React,{ useState, useEffect, useReducer,Fragment} from 'react';
import { useHistory } from 'react-router-dom';
import 'date-fns';
import Divider from '@material-ui/core/Divider';
import { Grid, Paper, TextField, Button, CardActionArea } from '@material-ui/core';
import * as Yup from 'yup';
import axios from 'axios';
import pic from './photo.jpg';
import './help.css';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';


  const useStyles=makeStyles(theme=>({
  root:{
    top:theme.spacing(9)
  }
}
  ))

const Profile=()=>{
    const paperStyle={padding :'20px 20px',width:800, height:1500, margin:"30px auto"}


   
     
                
    return(
        <Grid>
        
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
            {/* <div>
            <img src={imgl} style={imgstyle} alt=""/>
            
            </div> */}
            
                 <img src={pic} alt="logo" height="110" width="100" align="right" />
                 <h3 align="left">Maanasa S Prasad</h3>
                 <h5 align="left">9188261080|mspletters@gmail.com</h5>
            </Grid>
            
                   <Grid>
                        
                   
                          <br/><Divider fullWidth/>
                                <h4 align="left">EDUCATION</h4>
                                <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> 1) <b>LBSITW</b><br/>2022(Year of Passing)<br/>B.Tech-AE&I<br/>9.95(CGPA)<br/><br/>2) <b>Infant Jesus Central School</b>
                                <br/>2018(Year of Passing)<br/>AISSCE(CBSE 12th)<br/>97.2%<br/><br/>3)<b>Infant Jesus Central School</b>
                                <br/>2016(Year of Passing)<br/>AISSE(CBSE 10th)<br/>95%<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid>
                        <Divider fullWidth/>
                        <h4 align="left">SKILLS</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> C programming, ReactJS, IntelliJIDEA, IoT circuit designing, MATLAB<br/><br/>
                                Team Building, Problem Solving, Decision Making <br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid>
                        <Divider fullWidth/>
                       < h4 align="left">ACHIEVEMENTS & AWARDS</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> Secured first position in IDEATHON challenge conducted by IEEE SB LBSITW<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid>
                        <Divider fullWidth/>
                        <h4 align="left">INTERNSHIPS</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> 1) Computer Hardware and Networking, APJ Abdul Kalam Technological University Curriculum<br/><br/>
                                2) Embedded System Design, IoT & Machine Learning,  APJ Abdul Kalam Technological University Curriculum<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid>
                        <Divider fullWidth/>
                        <h4 align="left">MOOC COURSES SUCCESSFULLY COMPLETED</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> 1) Career Edge-Knockdown the Lockdown, offered by TCS ION<br/><br/>
                                2) Technical Support Fundamentals, authorized by Google<br/><br/>
                                3) Python for Data Science and AI, authorized by IBM<br/><br/>
                                4) Introduction to Virtual Reality, authorized by University of London and Goldsmiths<br/><br/>
                                5) Introduction to Satellite Communications, authorized by Institut Mines-Telecom, France<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid><Divider fullWidth/>
                        <h4 align="left">CONFERENCES ATTENDED</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea> National Conference on Advances in Communication, Signal Processing and Instrumentation 2020<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid><Divider fullWidth/>
                        <h4 align="left">WEBINARS ATTENDED</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea>1) Introduction to Cyber Security, organized by IEEE SB LBSITW<br/><br/>
                                2) Introduction to Deep Learning, conducted by CADS in collaboration with IEDC LBSITW<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid><Divider fullWidth/>
                        <h4 align="left">WORKSHOPS ATTENDED</h4>
                        <Grid item xs={6}>
                                <card  align="left"><cardcontent><CardActionArea>1) Artificial Intelligence, organized by ORISYS ACADEMY<br/><br/>
                                2) Smart Watch Design and Development, conducted by IEEE SB LBSITW<br/><br/>
                                </CardActionArea></cardcontent></card>
                        </Grid>
                        </Grid>
                       
                
          
           
        </Paper>
       
    </Grid>
)

}
    
export default Profile;