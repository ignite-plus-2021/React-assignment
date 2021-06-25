import React from 'react'
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const MyContact = () => {
    return (
        <div className="about">
            <h1 style={{ "margin-top": "50px", "margin-left": "200px", color: "green" }}>Contact Me</h1>
            <p style={{ "text-align": "centred", padding: "50px", "font-size": "150%" }}>
                <div >
                    <p>kalerutuja@gmail.com<span style={{ "margin-left": "5px" }}><EmailIcon></EmailIcon></span></p>
                </div>
                <br></br>
                <br></br>
                <div>
                    <p>862385360<span style={{ "margin-left": "5px" }}><PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon></span></p>
                </div>
                <br></br>
                <br></br>
                <div >
                    <p>Pune,India<span style={{ "margin-left": "5px" }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon></span></p>

                </div>
            </p>
        </div >
    )
}

export default MyContact
