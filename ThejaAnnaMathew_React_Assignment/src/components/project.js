import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Project extends Component {
  render() {
    return(
      <Grid>
        
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.projectName}</h4>
          <p>{this.props.projectDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Project;
