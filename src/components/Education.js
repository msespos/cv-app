import React, { Component } from 'react';
import EducationOverview from './EducationOverview';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      educations: [],
      education: {
        school: "",
        major: "",
        degree: "",
        id: uniqid(),
      },
      displayMode: "edit",
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
  }

  toggleDisplay() {
    if (this.state.displayMode === "display") {
      this.setState({
        displayMode: "edit"
      })
    } else {
      this.setState({
        displayMode: "display"
      })
    }
  }

  addEducation(e) {
    e.preventDefault();
    this.setState({
      education: { id: uniqid() }
    })
    this.setState({
      educations: this.state.educations.concat(this.state.education),
    });
    this.toggleDisplay();
  }

  handleSchoolChange(e) {
    let education = {...this.state.education};
    education.school = e.target.value;
    this.setState({
      education
    });
  }

  handleMajorChange(e) {
    let education = {...this.state.education};
    education.major = e.target.value;
    this.setState({
      education
    });
  }

  handleDegreeChange(e) {
    let education = {...this.state.education};
    education.degree = e.target.value;
    this.setState({
      education
    });
  }

  render() {
    if (this.state.displayMode === "edit") {
      return (
        <div>
          <EducationOverview educations={this.state.educations} />
          <form onSubmit={this.addEducation}>
            <input
              id="school"
              type="text"
              placeholder="School"
              value={this.state.school}
              onChange={this.handleSchoolChange}
              required
            />
            <input
              id="major"
              type="text"
              placeholder="Major"
              value={this.state.major}
              onChange={this.handleMajorChange}
              required
            />
            <input
              id="degree"
              type="text"
              placeholder="degree"
              value={this.state.degree}
              onChange={this.handleDegreeChange}
              required
            />
            <button type="submit">Submit Education</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <EducationOverview educations={this.state.educations} />
          <button onClick={this.toggleDisplay}>Add Education</button>
        </div>
      )
    }
  }
}

export default Education;
