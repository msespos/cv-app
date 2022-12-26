import React, { Component } from 'react';

class DisplayedEducation extends Component {
  render() {
    return (
      <div key={this.props.education.id}>
        {"School: " + this.props.education.school +
         "; Major: " + this.props.education.major +
         "; Degree: " + this.props.education.degree}
      </div>    
    )
  }
}

export default DisplayedEducation
