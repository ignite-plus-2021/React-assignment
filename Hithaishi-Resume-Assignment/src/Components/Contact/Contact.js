import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component 
{
    render(){
    return (
        <div className="contact" >
            <p className="con"><b>Phone Number</b>: 1234567890</p>
            <p className="con"><b>E-mail</b>: meghanadinesh6@gmail.com</p>
            <p className="con"><b>LinkedIn</b>: <a href="https://www.linkedin.com/in/meghana-dinesh-48720b192/" target="_blank">Link</a></p>
            
        </div>
    )}
}
export default Contact