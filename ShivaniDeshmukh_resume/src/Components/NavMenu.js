import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavMenuStyles = styled.div `
  position:fixed;
  z-index:100;
  top:0;
  left:0;
  height:70px;
  width:100%;
  padding:1rem 0;
  background-color: Teal;
  color:white;

  ul{
      list-style-type:none;
      max-width:1200px;
      margin:0 auto;
      width:90%;
      text-align:center;
      li{
          display:inline-block;
          border-radius:9px;
          transition:0.3s ease backgroung-color;
          &:hover{
              background-color:Sienna;
          }
      a{
          display:inline-block;
          font-family:Georgia;
          padding:1rem 2rem;
          font-size:2rem;
          outline:none;
          text-decoration:none;
          color:white;
      }    
      .active{
          background-color:black;
      }
      }
  }

`;
function NavMenu ()  {
    return (
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink to="/home" exact> Home </NavLink>
                </li>
                
                <li>
                    <NavLink to="/about"> About </NavLink>
                </li>

                <li>
                <NavLink to="/experience"> Experience </NavLink>
                </li>

                                
            </ul>
        </NavMenuStyles>
    )
}
export default NavMenu;