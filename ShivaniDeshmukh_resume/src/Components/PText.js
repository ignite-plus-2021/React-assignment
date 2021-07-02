import styled from 'styled-components';

const PStyle = styled.div`  
  margin: 0 auto;
  font-size: 1.3rem;  
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}      
