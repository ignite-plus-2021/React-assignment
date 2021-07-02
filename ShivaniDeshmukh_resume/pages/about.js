import styled from "styled-components";
import Aboutinfo from "../Components/Aboutinfo";


const AboutStyles = styled.div`
    background-color:Dimgrey;
    color:black;
    font-family:Georgia;
    padding: 4rem 0 4rem 0;
    
    .container {
    margin-left:1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;

    .details{
        margin-top: 5rem;
    }
    
  }
`;
const About = () => {
    return (
        <AboutStyles>
            <div className="container">
                <div className="details">
                    <div className="skills">
                        <h2 className="details_heading">My Skills</h2>
                        <Aboutinfo
                            title=""
                            items={['Core Java','HTML','JS','CSS','React','SpringBoot','OOP','DSA','MySQL']}
                        />
                    </div>

                    <div className="skills">
                        <h2 className="details_heading">Education Qualifications</h2>
                        <Aboutinfo
                            title="College"
                            items={["MKSSS's Cummins College of Engineering for Women, Pune (Breanch:Computer) ",'8.8 CGPA']}
                        />

                        <Aboutinfo
                            title="Junior College"
                            items={['Kulbhushan Junior College, Aurangabad','85.54%']}
                        />

                        <Aboutinfo
                            title="School"
                            items={['Podar International School, Aurangabad (CBSE)','10 CGPA']}
                        />
                    </div>
                </div>
            </div>
            
        </AboutStyles>
    )
}
export default About;
