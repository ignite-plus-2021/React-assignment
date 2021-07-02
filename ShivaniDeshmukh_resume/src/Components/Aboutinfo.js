import PText from './PText'
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left:3rem;
  margin-top: 3rem;
  .title {
    font-size: 1.5rem;
    color:white;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: relative;
    left: 5rem;
  }
  .item {
    
    background-color: #282c34;
    padding: 1rem;
    border-radius: 8px;
    color:white;
  }
  `;
  
const Aboutinfo = ({title="",items=[]}) => {
    return (
        <AboutItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
            {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
            </div>
        </AboutItemStyles>
    )
}
export default Aboutinfo