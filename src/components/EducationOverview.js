import React, { Component } from 'react';

class EducationOverview extends Component {
  render() {
    return (
      <div>
        {this.props.educations.map((education, index) => {
          return (
            <div key={education.id}>
              {"School: " + education.school +
               "; Major: " + education.major +
               "; Degree: " + education.degree}
            </div>
          )
        })}
      </div>    
    )
  }
}

export default EducationOverview
