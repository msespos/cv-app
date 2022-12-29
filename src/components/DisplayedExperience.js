import React, { Component } from 'react';

class DisplayedExperience extends Component {
  render() {
    return (
      <div key={this.props.experience.id}>
        <em>Position:</em> {this.props.experience.position}
        <em> --- Employer:</em> {this.props.experience.employer}
        <em> --- Dates:</em> {this.props.experience.dates}
        <em> --- Duties:</em> {this.props.experience.duties}
      </div>    
    )
  }
}

export default DisplayedExperience
