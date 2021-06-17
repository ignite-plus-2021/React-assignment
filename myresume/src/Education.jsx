import React from 'react';
function Education(props)
{
  return(
    <>
    <h2 style={{ backgroundColor:"steelblue"}}>EDUCATIONAL DETAILS</h2>
    <div style={{overflowX:"auto"}}>
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
              <td>Mody University of Science and Technology</td>
              <td>-</td>
              <td>2022</td>
              <td>8.97 <br/>(Till 5th sem)</td>
            </tr>
            <tr>
              <td>XII std.</td>
              <td>B.N.G.S.S Rajsamand </td>
              <td>RBSE</td>
              <td>2017</td>
              <td>91</td>
            </tr>
            <tr>
              <td>X std.</td>
              <td>B.N.G.S.S Rajsamand </td>
              <td>RBSE</td>
              <td>2015</td>
              <td>90</td>
            </tr>
        </table>
        </div>
    </>
  );
}

export default Education;