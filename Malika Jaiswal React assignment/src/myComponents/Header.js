import React from 'react';
import images from './images/target.png';

export default function Header() {
    return (
       
            <nav className="navbar navbar-expand-lg navbar-light ">
      <img src={images} width="50" height="50" padding-right="10px" class="d-inline-block align-top" alt=""/>
  <a class="navbar-brand" ><b>TARGET IGNITE PLUS</b></a>
  
</nav>
            
        
    )
}
