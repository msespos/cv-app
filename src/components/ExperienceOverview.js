import React, { Component } from 'react';

class ExperienceOverview extends Component {
  render() {
    return (
      <div>
        {this.props.experiences.map((experience, index) => {
          return (
            <div key={experience.id}>
              {"Position: " + experience.position +
               "; Employer: " + experience.employer +
               "; Dates: " + experience.dates +
               "; Duties: " + experience.duties}
            </div>
          )
        })}
      </div>    
    )
  }
}

export default ExperienceOverview