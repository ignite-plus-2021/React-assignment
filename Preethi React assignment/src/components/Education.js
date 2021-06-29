import React from 'react'

function Education() {
    return(
        <>
        <h2  className="edu">EDUCATIONAL DETAILS</h2>
        <div className="education">
            <table>
                <tr>
                  <th>Qualification</th>
                  <th>Institute </th>
                  <th>Board </th>
                  <th>Year of Passing </th>
                  <th>CGPA / Marks %</th>
                </tr>
                <tr>
                  <td>B.tech</td>
                  <td>Sir M. Visvesvaraya Institute of Technology</td>
                  <td>Vtu</td>
                  <td>2022</td>
                  <td>8.8 <br/>(Till 5th sem)</td>
                </tr>
                <tr>
                  <td>XII std.</td>
                  <td> Morarji Desai Science PU College</td>
                  <td>Karnataka</td>
                  <td>2017</td>
                  <td>89.8%</td>
                </tr>
                <tr>
                  <td>X std.</td>
                  <td>B R Ambedkara Residential School Ragigudda</td>
                  <td>Karnatka</td>
                  <td>2015</td>
                  <td>94.88</td>
                </tr>
            </table>
            </div>
        </>
      );
    
}

export default Education
