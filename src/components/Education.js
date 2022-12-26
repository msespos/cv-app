import React, { Component } from 'react';
import DisplayedEducation from './DisplayedEducation';
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
        editDisplayMode: "display",
      },
      addDisplayMode: "add",
    }

    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.toggleEditDisplay = this.toggleEditDisplay.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
  }

  toggleAddDisplay() {
    if (this.state.addDisplayMode === "display") {
      this.setState({
        addDisplayMode: "add"
      })
    } else {
      this.setState({
        addDisplayMode: "display"
      })
    }
  }

  toggleEditDisplay(edu) {
    if (edu.editDisplayMode === "display") {
      edu.editDisplayMode = "edit";
      this.setState({
        edu
      });
    } else {
      edu.editDisplayMode = "display";
      this.setState({
        edu
      });
    }
  }

  addEducation(e) {
    e.preventDefault();
    this.setState({
      education: { id: uniqid(), editDisplayMode: "display" },
    })
    this.setState({
      educations: this.state.educations.concat(this.state.education),
    });
    this.toggleAddDisplay();
  }

  editEducation(e, exp) {
    e.preventDefault();
    exp.school = this.state.education.school;
    exp.major = this.state.education.major;
    exp.degree = this.state.education.degree;
    this.setState({
      exp
    });
    this.toggleEditDisplay(exp);
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
    const educationList = this.state.educations.map((education) => {
      if (education.editDisplayMode === "display") {
        return (
          <div key={education.id}>
            <DisplayedEducation education={education} />
            <button onClick={() => this.toggleEditDisplay(education)}>Edit</button>
          </div>
        )
      } else {
        return (
          <div key={education.id}>
            <form onSubmit={(e) => this.editEducation(e, education)}>
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
              <button type="submit">Submit Edit</button>
            </form>
          </div>
        )
      }
    })
    if (this.state.addDisplayMode === "add") {
      return (
        <div>
          {educationList}
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
          {educationList}
          <button onClick={this.toggleAddDisplay}>Add Education</button>
        </div>
      )
    }
  }
}

export default Education;
