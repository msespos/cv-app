import React, { Component } from 'react';


class DisplayedExperience extends Component {
  render() {
    return (
      <div key={this.props.experience.id}>
        {"Position: " + this.props.experience.position +
         "; Employer: " + this.props.experience.employer +
         "; Dates: " + this.props.experience.dates +
         "; Duties: " + this.props.experience.duties}
      </div>    
    )
  }
}

export default DisplayedExperience