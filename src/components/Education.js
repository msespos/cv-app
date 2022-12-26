import React, { Component } from 'react';
import DisplayedEducation from './DisplayedEducation';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      educations: [
        {
          school: "",
          major: "",
          degree: "",
          id: uniqid(),
          editDisplayMode: "hidden",
        }
      ],
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

  toggleEditDisplay(education) {
    if (education.editDisplayMode === "display") {
      education.editDisplayMode = "edit";
    } else {
      education.editDisplayMode = "display";
    }
    this.setState({
      educations: this.state.educations
    });
  }

  addEducation(e) {
    e.preventDefault();
    let newBlank = {
      school: "",
      major: "",
      degree: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
    this.state.educations.slice(-1)[0].editDisplayMode = "display";
    this.setState({
      educations: this.state.educations.concat(newBlank),
    });
    this.toggleAddDisplay();
  }

  editEducation(e, education) {
    e.preventDefault();
    this.setState({
      educations: this.state.educations,
    });
    this.toggleEditDisplay(education);
  }

  handleSchoolChange(e, education) {
    education.school = e.target.value;
    this.setState({
      educations: this.state.educations
    });
  }

  handleMajorChange(e, education) {
    education.major = e.target.value;
    this.setState({
      educations: this.state.educations
    });
  }

  handleDegreeChange(e, education) {
    education.degree = e.target.value;
    this.setState({
      educations: this.state.educations
    });
  }

  render() {
    const educationList = this.state.educations.map((education) => {
      if (education.editDisplayMode === "hidden") {
        return;
      } else if (education.editDisplayMode === "display") {
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
                value={education.school}
                onChange={(e) => this.handleSchoolChange(e, education)}
                required
              />
              <input
                id="major"
                type="text"
                placeholder="Major"
                value={education.major}
                onChange={(e) => this.handleMajorChange(e, education)}
                required
              />
              <input
                id="degree"
                type="text"
                placeholder="degree"
                value={education.degree}
                onChange={(e) => this.handleDegreeChange(e, education)}
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
              onChange={(e) => this.handleSchoolChange(e, this.state.educations.slice(-1)[0])}
              required
            />
            <input
              id="major"
              type="text"
              placeholder="Major"
              value={this.state.major}
              onChange={(e) => this.handleMajorChange(e, this.state.educations.slice(-1)[0])}
              required
            />
            <input
              id="degree"
              type="text"
              placeholder="degree"
              value={this.state.degree}
              onChange={(e) => this.handleDegreeChange(e, this.state.educations.slice(-1)[0])}
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
