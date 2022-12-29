import React, { Component } from 'react';

class DisplayedEducation extends Component {
  render() {
    return (
      <div key={this.props.education.id}>
        <em>School:</em> {this.props.education.school}
        <em> --- Major:</em> {this.props.education.major}
        <em> --- Degree:</em> {this.props.education.degree}
        <br></br>
      </div>    
    )
  }
}

export default DisplayedEducation
