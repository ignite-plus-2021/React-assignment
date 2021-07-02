import Profile from '../images/Profile.jpg'
import styled from 'styled-components'

const IntroStyles = styled.div `
    
    .container{
        padding-left:10rem;
        background-color:Lavender;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content:flex-start;
        
        height: 95vh;
        min-height: 1000px;
        width: 100%;
    }
    .intro_heading{
        font-family:Georgia;
        font-size:1.2rem;
    }
    
    .profile_img {
        flex:1;
        max-width: 500px;
        height: 500px;
        margin: 0 auto;
        border: 2px solid black;}
    
`;

const IntroSection = () => {
    return (
        <IntroStyles>
            
            <div className="container">
                <div className="intro_heading">
                    <h2>Hello, I'm</h2>
                    <h1>Shivani Deshmukh</h1>
                    <h3 >I'm a Computer Engineering student.<br></br> I love to learn new technologies and desire<br></br> to 
                        successfully deliver solution to demanding <br></br>problems in this ever evolving corporate world.
                    </h3>
                    <br></br>
                    <p style={{fontSize:'20px'}}>
                        Email id:shivani.deshmukh@cumminscollege.in |<br></br>
                        Contact No.:7378736005    
                    </p> 
                </div>

                <div className="profile_img">
                    <img src={Profile} alt="" style={{height:'500px',width:'500px'}}/>
                </div>
            </div>
            
        </IntroStyles>
    )
}
export default IntroSection;
