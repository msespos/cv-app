import React, { Component } from 'react';
import DisplayedExperience from './DisplayedExperience';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [],
      experience: {
        position: "",
        employer: "",
        dates: "",
        duties: "",
        id: uniqid(),
        editDisplayMode: "display",
      },
      addDisplayMode: "add",
    }

    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.toggleEditDisplay = this.toggleEditDisplay.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleEmployerChange = this.handleEmployerChange.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleDutiesChange = this.handleDutiesChange.bind(this);
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

  toggleEditDisplay(exp) {
    if (exp.editDisplayMode === "display") {
      exp.editDisplayMode = "edit";
      this.setState({
        exp
      });
    } else {
      exp.editDisplayMode = "display";
      this.setState({
        exp
      });
    }
    console.log(exp)
  }

  addExperience(e) {
    e.preventDefault();
    this.setState({
      experience: { id: uniqid(), editDisplayMode: "display" },
    })
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
    });
    this.toggleAddDisplay();
  }

  editExperience(e, exp) {
    e.preventDefault();
    exp.position = this.state.experience.position;
    exp.employer = this.state.experience.employer;
    exp.dates = this.state.experience.dates;
    exp.duties = this.state.experience.duties;
    this.setState({
      exp
    });
    this.toggleEditDisplay(exp);
  }

  handlePositionChange(e) {
    let experience = {...this.state.experience};
    experience.position = e.target.value;
    this.setState({
      experience
    });
  }

  handleEmployerChange(e) {
    let experience = {...this.state.experience};
    experience.employer = e.target.value;
    this.setState({
      experience
    });
  }

  handleDatesChange(e) {
    let experience = {...this.state.experience};
    experience.dates = e.target.value;
    this.setState({
      experience
    });
  }

  handleDutiesChange(e) {
    let experience = {...this.state.experience};
    experience.duties = e.target.value;
    this.setState({
      experience
    });
  }

  render() {
    const experienceList = this.state.experiences.map((experience) => {
      if (experience.editDisplayMode === "display") {
        return (
          <div key={experience.id}>
            <DisplayedExperience experience={experience} />
            <button onClick={() => this.toggleEditDisplay(experience)}>Edit</button>
          </div>
        )
      } else {
        return (
          <div key={experience.id}>
            <form onSubmit={(e) => this.editExperience(e, experience)}>
              <input
                id="position"
                type="text"
                placeholder="Position"
                value={this.state.position}
                onChange={this.handlePositionChange}
                required
              />
              <input
                id="employer"
                type="text"
                placeholder="Employer"
                value={this.state.employer}
                onChange={this.handleEmployerChange}
                required
              />
              <input
                id="dates"
                type="text"
                placeholder="Dates"
                value={this.state.dates}
                onChange={this.handleDatesChange}
                required
              />
              <input
                id="duties"
                type="textarea"
                placeholder="Duties"
                value={this.state.duties}
                onChange={this.handleDutiesChange}
                required
              />
              <button type="submit">Submit Edits</button>
            </form>
          </div>
        )
      }
    })
    if (this.state.addDisplayMode === "add") {
      return (
        <div>
          {experienceList}
          <form onSubmit={this.addExperience}>
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handlePositionChange}
              required
            />
            <input
              id="employer"
              type="text"
              placeholder="Employer"
              value={this.state.employer}
              onChange={this.handleEmployerChange}
              required
            />
            <input
              id="dates"
              type="text"
              placeholder="Dates"
              value={this.state.dates}
              onChange={this.handleDatesChange}
              required
            />
            <input
              id="duties"
              type="textarea"
              placeholder="Duties"
              value={this.state.duties}
              onChange={this.handleDutiesChange}
              required
            />
            <button type="submit">Submit Experience</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          {experienceList}
          <button onClick={this.toggleAddDisplay}>Add Experience</button>
        </div>
      )
    }
  }
}

export default Experience;
