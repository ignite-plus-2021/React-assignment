import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import { useMediaQuery } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',



    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();
    return (
      <div id = "education" >
      <div  style = {{  marginLeft: '15%', marginRight: '15%', }} >
                <Typography variant = "h5" component = "h2" style = {{ fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '30px', color: '#00796b', }}>
                    EDUCATION
                </Typography>
                <Timeline align = "alternate" >
                    <TimelineItem >
                        <TimelineOppositeContent >
                            <Typography variant = "body2" color = '#37474f' >
                                2018 - Present
                            </Typography>
                        < /TimelineOppositeContent >
                        <TimelineSeparator >
                            <TimelineDot color = "#00838f" >
                                <LaptopMacIcon / >
                            </TimelineDot>
                            <TimelineConnector  / >
                        </TimelineSeparator>
                        <TimelineContent >
                            <Paper elevation = { 3 } className = { classes.paper } style = {{ marginTop: '20px', marginBottom: '20px', marginRight: '10%' }}>
                                <Typography variant = "h6" component = "h1" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                                    BE(Computer Science)
                                </Typography>
                                <Typography style = {{color: '#37474f', fontFamily: 'cursive' }} >
                                    Sir M Visvesvaraya Institute of Technology, Bangalore < /Typography>
                                <Typography style = {{color: '#37474f', fontFamily: 'cursive' }} >
                                    CGPA: 9.02(Till 5 th Semester) < /Typography>
                            </Paper >
                        < /TimelineContent >
                    </TimelineItem>
                    <TimelineItem >
                        <TimelineOppositeContent >
                            <Typography variant = "body2" color = '#37474f' >
                                2018
                            </Typography>
                        </TimelineOppositeContent >
                        <TimelineSeparator >
                            <TimelineDot color = "#00838f" >
                                <MenuBookIcon / >
                            </TimelineDot>
                            <TimelineConnector / >
                        </TimelineSeparator>
                        <TimelineContent >
                            <Paper elevation = { 3 } className = { classes.paper } style = {{ marginTop: '20px', marginBottom: '20px', marginLeft: '10%' }} >
                                <Typography variant = "h6" component = "h1" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                                    XII
                                </Typography>
                                <Typography style = {{ color: '#37474f', fontFamily: 'cursive' }} >
                                    Jodhamal Public School, Jammu
                                < /Typography>
                                <Typography style = {{ color: '#37474f', fontFamily: 'cursive' }} >
                                     Percentage: 86 % (CBSE)
                                < /Typography>
                            < /Paper >
                        </TimelineContent>
                    </TimelineItem >
                    <TimelineItem >
                        <TimelineOppositeContent >
                            <Typography variant = "body2" color = '#37474f' >
                                2016
                            </Typography>
                        </TimelineOppositeContent >
                        <TimelineSeparator >
                            <TimelineDot color = "#00838f" >
                                <SchoolIcon / >
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator >
                        <TimelineContent >
                          <Paper elevation = { 3 } className = { classes.paper } style = {{ marginTop: '20px', marginBottom: '20px', marginRight: '15%' }}>
                            <Typography variant = "h6" component = "h1" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                              X
                            </Typography>
                            <Typography style = {{color: '#37474f', fontFamily: 'cursive' }} >
                            Jodhamal Public School, Jammu
                            < /Typography>
                            <Typography style = {{ color: '#37474f', fontFamily: 'cursive' }} >
                             CGPA: 10(CBSE)
                            </Typography>
                            < /Paper >
                          </TimelineContent>
                      < /TimelineItem >
                    </Timeline>
                  </div >
                </div >
    );
}
