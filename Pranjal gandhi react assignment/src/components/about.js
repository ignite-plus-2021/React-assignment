import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Photo from "../photos/Pranjal.jpeg"
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';

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
            width: "50%",
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
            marginRight: '5%'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
            marginLeft: '15%'
        },


    },

}));


export default function AboutMe() {
    const classes = useStyles();
    return (
          <div >
            < div id = "about" className = { classes.main } style = {{  marginRight: '15%', }} >
                <Box className = { classes.root }  >

                <Box className = { classes.content } p = { 1 } >
                        <div className = { classes.text } style = {{ marginTop: '70px', marginBottom: '70px', padding:"30px"}} >
                            <Typography gutterBottom variant = "headline" component = "h2" style = { { fontWeight: 'bolder', fontSize: '30px', fontFamily: 'cursive', color: '#00796b', }} >
                                About Me
                            </Typography>
                            <Typography component = "p" style = {{ color: '#546e7a', fontFamily: 'cursive', textAlign: 'center' }} >
                                I’ m an enthusiastic individual who is always fascinated by technology. An extremely hardworking and passionate student who is
                                always ready to gain knowledge and put her best to utilize that knowledge in the practical world.

                            <br / >
                            <br / >

                            Currently enrolled in full time Bachelors of Engineering course speciaized in
                            the field of Computer Science at Sir M Visvesvaraya Institute of Technology.<br / >
                            Apart from this I'm working as an intern with a startup company namely
                            TechExordium and gaining knowledge being a part of the Tech Industry.<br / >
                            Also part of the Ignite+ Boot camp by Target, where we are being trained on different industrial Technologies.

                            <br / >
                            <br / >

                            Experienced in Web development and interested in the domain of Data Science.
                            <br / >
                            Currently looking for entry-level opportunity with an esteemed
                            organization where I can utilize my skills and enhance learning in the field of computer science.
                            </Typography>
                        < /div >
                    </Box>
                < /Box >
            </div>
          </div>
             );
}
