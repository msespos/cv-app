import React, { Component } from 'react';
import ExperienceOverview from './ExperienceOverview';
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
      },
      displayMode: "edit",
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleEmployerChange = this.handleEmployerChange.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleDutiesChange = this.handleDutiesChange.bind(this);
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

  addExperience(e) {
    e.preventDefault();
    this.setState({
      experience: { id: uniqid() }
    })
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
    });
    this.toggleDisplay();
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
    if (this.state.displayMode === "edit") {
      return (
        <div>
          <ExperienceOverview experiences={this.state.experiences} />
          <form onSubmit={this.addExperience}>
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handlePositionChange}
            />
            <input
              id="employer"
              type="text"
              placeholder="Employer"
              value={this.state.employer}
              onChange={this.handleEmployerChange}
            />
            <input
              id="dates"
              type="text"
              placeholder="Dates"
              value={this.state.dates}
              onChange={this.handleDatesChange}
            />
            <input
              id="duties"
              type="textarea"
              placeholder="Duties"
              value={this.state.duties}
              onChange={this.handleDutiesChange}
            />
            <button type="submit">Submit Experience</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <ExperienceOverview experiences={this.state.experiences} />
          <button onClick={this.toggleDisplay}>Add Experience</button>
        </div>
      )
    }
  }
}

export default Experience;
