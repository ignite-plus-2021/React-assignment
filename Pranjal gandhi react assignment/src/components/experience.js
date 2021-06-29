import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';


const useStyles = makeStyles((theme) => ({
    root: {

        marginTop: '30px',
        marginBottom: '30px',


        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginLeft: '25%',
            marginRight: '25%',
            padding: '20px',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));
const theme = createMuiTheme({
    typography: {
        allVariants: {
            color: "pink"
        },
    },
});


export default function Experience() {
    const classes = useStyles();
    const bull = < span className = { classes.bullet } > • < /span>;
    const [show, setshow] = useState(false);
    return (
      <div id = "experience" style={{marginTop:"110px"}}>
        <Typography variant = "h5" component = "h2"
            style = {{ fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '30px', color: '#00796b', marginLeft: '15%' }
          }>
           EXPERIENCE
        </Typography>
        <motion.div whileHover = {{
                      scale: 1.1,

                }
          }>
            <Card className = { classes.root } >
              <CardContent >
                <Typography variant = "h5" component = "h2" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                  Target Ignite + Bootcamp Attendee
                </Typography>
                <Typography className = { classes.pos } color = "textSecondary" >
                  Target
                </Typography>
                <Typography variant = "body2" component = "p" style = {{ color: '#546e7a', fontFamily: 'cursive' }} >

            { bull }Part of the data science team. < br / >
            { bull }Working on Click stream data analysis(currently in progess) < br / >
            { bull }Technologies: < br / >
            1. Spark / Scala
            for processing data. < br / >
            2. PostgresSQL / MySQL
            for data persistence. < br / >
            <br/>
            {bull}
            Learned about various Technologies: <br/>
            1.SpringBoot <br/>
            2.ReactJs <br/>
            3.Hadoop <br/>
                </Typography>
              </CardContent >
            </Card>
        </motion.div >

        <motion.div whileHover = {{
                      scale: 1.1,

                }
          }>
            <Card className = { classes.root } >
              <CardContent >
                <Typography variant = "h5" component = "h2" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                  Web Developer Intern
                </Typography>
                <Typography className = { classes.pos } color = "textSecondary" >
                  Tech Exordium
                </Typography>
                <Typography variant = "body2" component = "p" style = {{ color: '#546e7a', fontFamily: 'cursive' }} >
                { bull }
               Part of the Frontend Team for a Food delivery Website. < br / >
               { bull }
               Task included: Creating front end of the website.<br/>

               { bull }
               Technologies: < br / >
               HTML(Bootstrap), CSS and JavaScript.
               <br/><br/>
               { bull }
               Project leader for a Clothing ecommerce Website(currently in progess).<br/>
                {bull}
                Task included:<br/>
               1.Managing the team of 12 people.<br/>
                2.Working as a front end developer.<br/>
                3.Organizing meetings on daily basis to divide the work, check the progress and reporting to the seniors.


                </Typography>
              </CardContent >
            </Card>
        </motion.div >
        {
        show ?

        <motion.div whileHover = {{
                      scale: 1.1,

                }
          }>
            <Card className = { classes.root } >
              <CardContent >
                <Typography variant = "h5" component = "h2" style = {{ fontWeight: 'bolder', fontFamily: 'monospace', color: '#37474f' }} >
                    Software Engineering Intern
                </Typography>
                <Typography className = { classes.pos } color = "textSecondary" >
                The Sparks Foundation
                </Typography>
                <Typography variant = "body2" component = "p" style = {{ color: '#546e7a', fontFamily: 'cursive' }} >
                { bull }
                Used selenium webdriver with java to perform automated testing. < br / >
                { bull }
                Created a basic webpage for payment integration using Razorpay. <br/>
                { bull }
                Learned the basics about cloud computing. < br / >

                </Typography>
              </CardContent >
            </Card>
        </motion.div >
        : null
      }
        <button style = {
          { marginTop: '10px', marginBottom: '50px', marginLeft: '45%', height: '50px', width: '125px', marginRight: '15%', backgroundColor: '#00796b', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '20px', color: 'white' }}
          onClick = {() => setshow(!show)} > { show ? "Show Less" : "Show More" }
        < /button>

      </div>
);
}
