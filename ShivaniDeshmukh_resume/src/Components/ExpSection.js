import styled from "styled-components"
import PText from "./PText";

const ExpsStyles=styled.div`
    text-align="center";
    max-width:15rem;
    .title_{
        font-size: 2rem;
        font-family: 'Georgia';
    }
    .para {
        margin-top: 2rem;
      }
`;
const ExpSection = ({title="Work", desc="Description"}) => {
    return (
        <ExpsStyles>
            <div>
            <div className="title_">{title}</div>
            <div className="desc_">
                <PText>{desc}</PText>
            </div>
            </div>
            
        </ExpsStyles>
    )
}
export default ExpSection