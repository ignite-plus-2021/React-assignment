import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Element } from 'react-scroll'
import Flip from 'react-reveal/Flip';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "row",

        [theme.breakpoints.only('xs')]: {
            flexDirection: "column",
        },
    },
    column: {
        alignItems: 'flexStart',
        flexBasis: '50%',
    },
    heading: {
        [theme.breakpoints.down('md')]: {
            fontSize: '15px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
        },
    },
    content:{
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',

        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',

        },
    },
    accordion: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '55%',
            width: '35%',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '10%',
            marginRight: '5%',

        },
        [theme.breakpoints.only('xs')]: {
            marginRight: '10%',
            marginLeft: '25%',

        },
    },
    accordionR: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '10%',
            width: '35%',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '10%',
            marginLeft: '5%',

        },
        [theme.breakpoints.only('xs')]: {
            marginRight: '10%',
            marginLeft: '25%',


        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },


}));

export default function SimpleAccordion() {
    const classes = useStyles();
    const bull = < span className = { classes.bullet } > • < /span>;

    return (
      <div >
      <div id = "skills"style={{padding:"70px"}}  >
        <Typography variant = "h5" component = "h2"
            style = {
                { fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '30px', color: '#00796b', marginLeft: '15%' }} >
             SKILLS
        </Typography>
        <div className = { classes.root } >
          <div className = { classes.column } >
            <Accordion className = { classes.accordion } style = {{ marginTop: '20px', marginBottom: '20px', }} >
              <AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > } id = "panel1a-header" >
                <Typography className = { classes.heading } style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                Programming Languages
                < /Typography>
              </AccordionSummary >
              <AccordionDetails className = { classes.content } >
                <Typography >
                {bull}C <br/>
                {bull}C++ <br/>
                {bull}Java <br/>
                {bull}Python <br/>


                </Typography>
              < /AccordionDetails >
            </Accordion>
          < /div >
          <div className = { classes.column } >
            <Accordion className = { classes.accordionR } style = {{ marginTop: '20px', marginBottom: '20px', }} >
              <AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > } id = "panel2a-header" >
                <Typography className = { classes.heading }style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                    Front End Technologies
                < /Typography>
              < /AccordionSummary >
              <AccordionDetails >
                <Typography >
                {bull}HTML <br/>
                {bull}CSS <br/>
                {bull}JavaScript <br/>
                {bull}ReactJS <br/>
                </Typography>
              < /AccordionDetails >
            </Accordion>
          < /div>
        </div>
        <div className = { classes.root } >
          <div className = { classes.column } >
            < Accordion className = { classes.accordion } style = {{ marginTop: '20px', marginBottom: '20px', }} >
              <AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > } id = "panel1a-header" >
                <Typography className = { classes.heading } style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                        Backend Technologies
                < /Typography>
              < /AccordionSummary >
              <AccordionDetails >
                <Typography >
                {bull}SpringBoot <br/>
                {bull}PHP<br/>
                </Typography>
              </AccordionDetails >
            </Accordion>
          </div >
        <div className = { classes.column } >
          <Accordion className = { classes.accordionR } style = {{ marginTop: '20px', marginBottom: '20px', } } >
            < AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > }id = "panel2a-header" >
              <Typography className = { classes.heading } style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                            DataBase
              < /Typography>
            < /AccordionSummary >
            <AccordionDetails >
              <Typography >
              {bull}MySQL <br/>
              {bull}SQLite <br/>
              {bull}Firebase<br/>
              </Typography>
            < /AccordionDetails >
          </Accordion>
        </div >
      </div>
      <div className = { classes.root } >
        <div className = { classes.column } >
          < Accordion className = { classes.accordion } style = {{ marginTop: '20px', marginBottom: '20px', }} >
            <AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > } id = "panel1a-header" >
              <Typography className = { classes.heading } style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                    Industry Knowledge
              < /Typography>
            < /AccordionSummary >
            <AccordionDetails >
              <Typography >
              {bull}Problem Solving<br/>
              {bull}Git/GitHub<br/>
              {bull}Data Structure/ Algorithm<br/>
              </Typography>
            </AccordionDetails >
          </Accordion>
        </div >
      <div className = { classes.column } >
        <Accordion className = { classes.accordionR } style = {{ marginTop: '20px', marginBottom: '20px',} } >
          < AccordionSummary expandIcon = { < ExpandMoreIcon style = {{ color: "#00838f" }}/ > }id = "panel2a-header" >
            <Typography className = { classes.heading } style = {{ fontWeight: 'bolder', fontFamily: 'cursive', color: '#00838f' }} >
                          Interpersonal Skills
            < /Typography>
          < /AccordionSummary >
          <AccordionDetails >
            <Typography >
            {bull}Time Management <br/>
            {bull}Leadership <br/>
            {bull}Team player<br/>
            {bull}Communication Skills<br/>
            </Typography>
          < /AccordionDetails >
        </Accordion>
      </div >
    </div>
  </div>
  </div>
);
}
