import React, {Component} from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component
 {
     render(){return (
        <div className="pesonal-info" >
            <p className="info"><b>Name</b>: Meghana Dinesh</p>
            <p className="info"><b>Father's Name</b>: N Dinesh Kumar</p>
            <p className="info"><b>Mother's Name</b>: Nirmala P S</p>
            <p className="info"><b>Location</b>: Bangalore</p>
        </div>
    )}
}
export default PersonalInfo