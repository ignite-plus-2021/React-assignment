import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { TextField, Typography, Box, Button, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import { Element } from 'react-scroll'
import { db } from '../firebase';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'100px',
        paddingBottom:'50px',
        marginBottom: '10px',
        marginLeft: '10%',


    },
    form: {
        marginTop: '20px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginLeft: '%',
            marginRight: '5%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '50%',
            marginLeft: '20%',
            marginRight: '20%',
        },

    },
}));


const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
                subject: subject,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted 👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
    };

    const classes = useStyles();
    return (
            <div id = 'contacts' >
                <div className = { classes.root } >
                    <Typography variant = "h5" component = "h2" style = {{ fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '30px', color: '#00796b', marginBottom: '30px' }} >
                         CONTACT ME
                    </Typography>
                    <Grid continer justify = 'center' >
                        <Box component = 'form' className = { classes.form } onSubmit = { handleSubmit } >
                            <TextField id = "outlined-basic" value = { name } required label = "Name" style = {{ width: '100%', marginBottom: '10px',}}
                                    onChange = {(e) => setName(e.target.value)}
                                    variant = "outlined"
                                    inputProps = {{ style: { fontFamily: 'monospace', color: '#37474f' } }}/>
                            <br / >
                            <TextField id = "outlined-basic" value = { email } required label = "Email ID" style = {{ width: '100%', marginBottom: '10px' }        }
                                    onChange = {(e) => setEmail(e.target.value)}
                                    variant = "outlined"
                                    inputProps = {{ style: { fontFamily: 'monospace', color: '#37474f' } }}/>
                            <br / >
                            <TextField id = "outlined-basic" value = { subject } required label = "Subject" style = {{ width: '100%', marginBottom: '10px' }}
                                    onChange = {(e) => setSubject(e.target.value)}
                                    variant = "outlined"
                                    inputProps = {{ style: { fontFamily: 'monospace', color: '#37474f' } }}/>
                            <br / >
                            <TextField id = "outlined-basic" value = { message } required label = "Message"style = {{ width: '100%', marginBottom: '10px' }}
                            onChange = {(e) => setMessage(e.target.value)}
                            variant = "outlined"
                            multiline rows = { 11 }
                            inputProps = {{ style: { fontFamily: 'monospace', color: '#37474f' } }}/>
                            <button type = "submit" style = {{ marginTop: '10px', marginBottom: '50px', marginLeft: '45%', height: '50px', width: '125px', marginRight: '15%', backgroundColor: '#00796b', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '20px', color: 'white' }} >
                                Send
                            < /button>
                        < /Box >
                    </Grid>
                < /div >
            </div>
    )
};

export default Contacts
