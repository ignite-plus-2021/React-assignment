import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Photo from "../photos/Pranjal.jpeg"
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import Education from './education';
import AboutMe from './about';
import Experience from './experience';
import Skills from './skills';
import Contacts from './contact';
import Bg from '../photos/bg.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",

        },
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            flexDirection: "row",


        },
        pic: {
            width: "50%",
        },
        content: {
            width: "40%",
            marginLeft:"10%",

        },
    },
    text: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },

    },
    main: {
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',

        },
        [theme.breakpoints.up('md')]: {
            width: '85%',
            marginLeft: '10%',
            paddingTop :"120px",
            paddingBottom:"50px"

        },



    },

}));


export default function Home() {
    const classes = useStyles();
    return (
      <div id = "home" style={{  width:'100%',height:'100%', backgroundSize:"cover", backgroundImage:'url{Bg}'}}>
      <div className = { classes.main }>
        <Box className = { classes.root } bgcolor = 'paper.color' >
            <Box className = { classes.pic } p = { 1 } >
                    <img src = { Photo }/>
            </Box>

            <Box className = { classes.content } p = { 1 }>

                <Typography  variant = "headline" component = "h2"
                  style = {{ fontWeight: 'bolder', fontSize: '60px', fontFamily: 'cursive', color: '#00796b', marginTop:"50px"} } >
                    Hi!
                </Typography>
                  <Box mr={4} display="inline">
                    <Typography  variant = "headline" component = "h2"
                      style = {{ fontWeight: 'bolder', fontSize: '30px', fontFamily: 'cursive', color: '#00796b', display: 'inline-block'} } >
                        I'm
                    </Typography>
                  </Box>
                    <Typography  variant = "headline" component = "h2"
                      style = {{ fontWeight: 'bolder', fontSize: '60px', fontFamily: 'oblique', color: '#00796b',textAlign: 'center', display: 'inline-block' } } >
                        Pranjal Gandhi
                    </Typography>
                    <Typography component = "p" style = {{ color: '#546e7a',fontWeight: 'bolder', fontFamily: 'cursive', textAlign: 'center',}} >
                    <br/><br/>Scroll Down To Know More...
                    </Typography>
            </Box>
          </Box >
        </div>
        <AboutMe/>
        <Education/>
        <Experience/>
        <Skills/>
        <Contacts/>
        </div>
    );
}
