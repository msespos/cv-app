import React, { Component } from 'react';
import DisplayedExperience from './DisplayedExperience';
import uniqid from 'uniqid';
import '../styles/Experience.css';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [
        {
          position: "",
          employer: "",
          dates: "",
          duties: "",
          id: uniqid(),
          editDisplayMode: "hidden",
        }
      ],
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

  toggleEditDisplay(experience) {
    if (experience.editDisplayMode === "display") {
      experience.editDisplayMode = "edit";
    } else {
      experience.editDisplayMode = "display"
    }
    this.setState({
      experiences: this.state.experiences
    });
  }

  addExperience(e) {
    e.preventDefault();
    let newBlank = {
      position: "",
      employer: "",
      dates: "",
      duties: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
    this.state.experiences.slice(-1)[0].editDisplayMode = "display";
    this.setState({
      experiences: this.state.experiences.concat(newBlank),
    });
    this.toggleAddDisplay();
  }

  editExperience(e, experience) {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences
    });
    this.toggleEditDisplay(experience);
  }

  handlePositionChange(e, experience) {
    experience.position = e.target.value;
    this.setState({
      experiences: this.state.experiences
    });
  }

  handleEmployerChange(e, experience) {
    experience.employer = e.target.value;
    this.setState({
      experiences: this.state.experiences
    });
  }

  handleDatesChange(e, experience) {
    experience.dates = e.target.value;
    this.setState({
      experiences: this.state.experiences
    });
  }

  handleDutiesChange(e, experience) {
    experience.duties = e.target.value;
    this.setState({
      experiences: this.state.experiences
    });
  }

  render() {
    const experienceList = this.state.experiences.map((experience) => {
      if (experience.editDisplayMode === "hidden") {
        return <div></div>;
      } else if (experience.editDisplayMode === "display") {
        return (
          <div className="experience-line-item" key={experience.id}>
            <DisplayedExperience experience={experience} />
            <button className="experience-edit-button" onClick={() => this.toggleEditDisplay(experience)}>Edit</button>
          </div>
        )
      } else {
        return (
          <div className="experience-edit" key={experience.id}>
            <form onSubmit={(e) => this.editExperience(e, experience)}>
              <input
                id="position"
                type="text"
                placeholder="Position"
                value={experience.position}
                onChange={(e) => this.handlePositionChange(e, experience)}
                required
              />
              <input
                id="employer"
                type="text"
                placeholder="Employer"
                value={experience.employer}
                onChange={(e) => this.handleEmployerChange(e, experience)}
                required
              />
              <input
                id="dates"
                type="text"
                placeholder="Dates"
                value={experience.dates}
                onChange={(e) => this.handleDatesChange(e, experience)}
                required
              />
              <input
                id="duties"
                type="textarea"
                placeholder="Duties"
                value={experience.duties}
                onChange={(e) => this.handleDutiesChange(e, experience)}
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
          {experienceList}
          <div className="experience-add">
            <form onSubmit={this.addExperience}>
              <input
                id="position"
                type="text"
                placeholder="Position"
                value={this.state.position}
                onChange={(e) => this.handlePositionChange(e, this.state.experiences.slice(-1)[0])}
                required
              />
              <input
                id="employer"
                type="text"
                placeholder="Employer"
                value={this.state.employer}
                onChange={(e) => this.handleEmployerChange(e, this.state.experiences.slice(-1)[0])}
                required
              />
              <input
                id="dates"
                type="text"
                placeholder="Dates"
                value={this.state.dates}
                onChange={(e) => this.handleDatesChange(e, this.state.experiences.slice(-1)[0])}
                required
              />
              <input
                id="duties"
                type="textarea"
                placeholder="Duties"
                value={this.state.duties}
                onChange={(e) => this.handleDutiesChange(e, this.state.experiences.slice(-1)[0])}
                required
              />
              <button type="submit">Submit Experience</button>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="experience-with-add-button">
          {experienceList}
          <div>
            <button className="experience-add-button" onClick={this.toggleAddDisplay}>Add Experience</button>
          </div>
        </div>
      )
    }
  }
}

export default Experience;
