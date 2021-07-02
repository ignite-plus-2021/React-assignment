import styled from 'styled-components'
import {GrLinkedin} from 'react-icons/gr'

const ContactStyles = styled.div`
    background-color:LightGrey;
    .col1{
        margin:0 1 rem;
        padding:20px 50px;
        
    }
    .ln
    {
        color:#49a1eb;
    }
`;
const Contact = () => {
    return (
        <ContactStyles>
            <div className="container">

                
                <div className="col1">
                    <h3>Contact details</h3>
                    <p>Email id:shivani.deshmukh@cumminscollege.in |<br></br>
                        Contact No.:7378736005  </p>
                    <a href="https://www.linkedin.com/in/shivani-deshmukh-483b6618b" className="ln" >
                    <GrLinkedin/>
                    </a>
                    
                </div>
                
            </div>
        </ContactStyles>
    )
}
export default Contact;
