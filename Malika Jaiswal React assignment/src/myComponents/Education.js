import React from 'react';
import images from './images/me.jpeg';

export default function Education() {
    return (
        
            <div className='col-3' align='center'>

                <img src={images}></img>
                <br/>
                <br/>
<ul class="list-group list-group-flush" >
  <li class="list">
    <b><h2><span className='fa fa-graduation-cap margin-span'></span>Education</h2></b>
  
  </li>
  <li class="list">
      <h5>2015 - 10TH CBSE</h5><br/>
      INDUS PUBLIC SCHOOL, ROHTAK, HARYANA
      <br/>
      CGPA - 9.6
      <hr class="my-4"/>
</li>
  <li class="list">
      <h5>2017 - 12TH CBSE</h5><br/>
      DAV PUBLIC SCHOOL, KOTA, RAJASTHAN<br/>
      PERCENTAGE - 80
      <hr class="my-4"/>
      </li>
      

  <li class="list"><h5>2018 - 2022 GRADUATION</h5><br/>
      SIR M. VISVESVARAYA INSTITUTE OF TECHNOLOGY, BANGALORE<br/>
      CGPA - 8.6
      <hr class="my-4"/>
      </li>

      
</ul>
</div>
        
    )
}
