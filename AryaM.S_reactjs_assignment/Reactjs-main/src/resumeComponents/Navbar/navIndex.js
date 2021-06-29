import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';
  
//const Navbar = () => 
export default function Navbar(){
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/Personalinfo' activeStyle>
            About
          </NavLink>
          <NavLink to='/skills' activeStyle>
           Skills
          </NavLink>
          <NavLink to='/Projects' activeStyle>
            Projects
          </NavLink>
          
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
//export default Navbar;