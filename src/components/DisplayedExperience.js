import React, { Component } from 'react';

class DisplayedExperience extends Component {
  render() {
    return (
      <div key={this.props.experience.id}>
        {this.props.experience.position} &#x2022; {this.props.experience.employer}<br></br>
        {this.props.experience.duties} &#x2022; {this.props.experience.dates}
      </div>    
    )
  }
}

export default DisplayedExperience
