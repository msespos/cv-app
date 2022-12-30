import React, { Component } from 'react';

class DisplayedEducation extends Component {
  render() {
    return (
      <div key={this.props.education.id}>
        {this.props.education.school} &#x2022; {this.props.education.major} &#x2022; {this.props.education.degree}
      </div>
    )
  }
}

export default DisplayedEducation
