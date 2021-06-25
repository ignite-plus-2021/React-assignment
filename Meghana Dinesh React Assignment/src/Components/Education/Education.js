import React, {Component} from 'react';
import './Education.css';

class Education extends Component
{
    render(){
    return (
        <div className="education" >
            <table className="table_edu">
                <tr>
                    <th>INSTITUTE</th>
                    <th>QUALIFICATION</th>
                    <th>MARKS/CGPA</th>
                </tr>
                <tr>
                    <td>Sir MVIT</td>
                    <td>BE 6th sem CSE</td>
                    <td>9.55</td>
                </tr>
                <tr>
                    <td>Sindhi High School</td>
                    <td>12th Grade</td>
                    <td>94%</td>
                </tr>
                <tr>
                    <td>Presidency School</td>
                    <td>10th Grade</td>
                    <td>97%</td>
                </tr>
            </table>
        </div>
    )
    }
}
export default Education