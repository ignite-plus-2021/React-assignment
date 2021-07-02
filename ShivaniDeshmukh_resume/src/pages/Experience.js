import styled from 'styled-components'
import ExpSection from '../Components/ExpSection';
const Expstyles=styled.div`
    background-color:Azure;
    text-align: center;
    font-family:Georgia;
    padding: 4rem 3rem;

    .p{
        font-size:2.3rem;   
    }
    .column{
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        margin-bottom: 5rem;
    }

`;
const Experience = () => {
    return (
        <Expstyles>
            <div className="container">
                <div className="heading">
                    <p>here are some of my works
                    <h1>EXPERIENCE</h1></p><br></br>
                </div>
                <div className="column">
                    <ExpSection title="Program"
                    desc="Target Ignite Plus Program Attendee 2021"></ExpSection>
                    <ExpSection title="Internship" 
                    desc="Verzeo's Microsoft Azure Cloud Computing Online Internship"></ExpSection>
                    <ExpSection title="Project1" desc="Predicting disease and recommending hospital app"></ExpSection>
                    <ExpSection title="Project2" desc="Bill Splitting application"></ExpSection>

                </div>
                
            </div>
            
        </Expstyles>
    )
}
export default Experience;
