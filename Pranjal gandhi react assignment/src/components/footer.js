import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppBar from '@material-ui/core/AppBar';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    appBar: {
        width: '100%',
        top: 'auto',
        bottom: 0,



    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
      <AppBar className = { classes.appBar } >
        <BottomNavigation position = "fixed" style = {{ backgroundColor: '#009688', }}
            onChange = {(event, newValue) => {setValue(newValue);}}
            showLabels className = { classes.root }
          >
          <a href = "https://www.linkedin.com/in/pranjal-gandhi-777150193/" >
            <BottomNavigationAction style = {{ color: "white" }}
              label = "LinkedIn"
              icon = { < LinkedInIcon style = {{ color: "white" }}/>}/>
          </a>
          <a href = "mailto:someone@example.com" >
            <BottomNavigationAction style = {{ color: "white" }}
              label = "Email"
              icon = { < EmailIcon style = {{ color: "white" }}/>}/>
          </a >
        </BottomNavigation>
      </AppBar >
        );
    }
