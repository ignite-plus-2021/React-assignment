import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    withStyles,
    Grid,
    SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const styleSheet = {
    list: {
        width: 200,
        backgroundColor: '#009688',
        color: "white",
        fontWeight: 'bolder',
        fontFamily: 'cursive'
    },
    padding: {
        marginLeft: 'auto',
        paddingRight: 30,
        cursor: "pointer",
        color: "white",
        fontWeight: 'bolder',
        fontFamily: 'cursive'
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    },

}

class ResAppBar extends Component {


    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 900) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 900) {
                this.setState({ drawerActivate: true });
            } else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    //Small Screens
    createDrawer() {
        return (
          <div >
            <AppBar style = {
                { backgroundColor: '#009688' }}>
                <Toolbar >
                  <Grid container direction = "row" justify = "space-between" alignItems = "center" >
                    <MenuIcon className = { this.props.classes.sideBarIcon } onClick = {() => { this.setState({ drawer: true })}}/>
                    <Typography color = "inherit" variant = "headline" >

                    </Typography>
                  </Grid >
                </Toolbar>
            </AppBar >

            <SwipeableDrawer open = { this.state.drawer }
              onClose = {() => { this.setState({ drawer: false }) }}
              onOpen = {() => { this.setState({ drawer: true }) }}
            >

            <div tabIndex = { 0 } role = "button"
              onClick = {() => { this.setState({ drawer: false }) }}
              onKeyDown = {() => { this.setState({ drawer: false }) }}
            >
            <List className = { this.props.classes.list } >
            <ListItem   >
             <Link className = "link"
              activeClass = "active"
              to = "about"
              spy = { true }
              smooth = { true }
              offset = { 0 }
              duration = { 750 } >
              About
              </Link>
            </ListItem >
            <ListItem   >
              <Link className = "link"
              activeClass = "active"
              to = "education"
              spy = { true }
              smooth = { true }
              offset = { 0 }
              duration = { 750 } >
              Education
              </Link>
            </ListItem >
            <ListItem >
              <Link className = "link"
              activeClass = "active"
              to = "experience"
              spy = { true }
              smooth = { true }
              offset = { 0 }
              duration = { 750 } >
              Experience
            </Link>
            </ListItem>
            <ListItem>
            <Link className = "link"
              activeClass = "active"
              to = "skills"
              spy = { true }
              smooth = { true }
              offset = { 0 }
              duration = { 750 } >Skills
            </Link>
            </ListItem>
            <ListItem >
            <Link className = "link"
              activeClass = "active"
              to = "contacts"
              spy = { true }
              smooth = { true }
              offset = { 0 }
              duration = { 750 } >
               Contact
            </Link>
            </ListItem>
          </List >

          </div>
          < /SwipeableDrawer >
          </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const { classes } = this.props

        return (
          <AppBar style={{backgroundColor:"#009688"}} >
            <Toolbar style = {{ marginLeft: 'auto' }} >

              <Typography variant = "subheading" className = { classes.padding } >
              <Link className = "link"
                activeClass = "active"
                to = "about"
                spy = { true }
                smooth = { true }
                offset = { 0 }
                duration = { 750 } >
                About
                </Link>
              </Typography >
              <Typography variant = "subheading" className = { classes.padding } >
              <Link className = "link"
                activeClass = "active"
                to = "education"
                spy = { true }
                smooth = { true }
                offset = { 0 }
                duration = { 750 } >
                Education
                </Link>
              </Typography>
              <Typography variant = "subheading" className = { classes.padding } >
              <Link className = "link"
                activeClass = "active"
                to = "experience"
                spy = { true }
                smooth = { true }
                offset = { 0 }
                duration = { 750 } >
                Experience
                </Link>
              </Typography>
              <Typography variant = "subheading" className = { classes.padding } >
              <Link className = "link"
                activeClass = "active"
                to = "skills"
                spy = { true }
                smooth = { true }
                offset = { 0 }
                duration = { 750 } >
                Skills
              </Link>
              </Typography>

              <Typography variant = "subheading" className = { classes.padding } >
              <Link className = "link"
                activeClass = "active"
                to = "contacts"
                spy = { true }
                smooth = { true }
                offset = { 0 }
                duration = { 750 } >
                Contact
                </Link>
              </Typography>
            </Toolbar >
          </AppBar>
        )
    }

    render() {
        return (
          <div >
            { this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer() }
          </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);
