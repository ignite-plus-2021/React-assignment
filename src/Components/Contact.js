import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Technical from "./Technical";
import Project from "./Project";
import Internship from "./Internship";
import Interests from "./Interests";

const Contact = () => {
    return (
        <div className="column">
            <div style={{ "margin-bottom": "120px" }}>
                <div style={{ "float": "right" }}>
                    <p>kalerutuja@gmail.com<span style={{ "margin-left": "5px" }}><EmailIcon></EmailIcon></span></p>
                </div>
                <br></br>
                <br></br>
                <div style={{ "float": "right" }}>
                    <p>862385360<span style={{ "margin-left": "5px" }}><PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon></span></p>
                </div>
                <br></br>
                <br></br>
                <div style={{ "float": "right" }}>
                    <p>Pune,India<span style={{ "margin-left": "5px" }}><LocationOnOutlinedIcon></LocationOnOutlinedIcon></span></p>

                </div>
            </div>
            <Technical />
            <Project />
            <Internship />
            <Interests />


        </div >



    )
}

export default Contact
