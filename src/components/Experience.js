import React, { useState } from 'react';
import DisplayedExperience from './DisplayedExperience';
import uniqid from 'uniqid';
import '../styles/Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      position: "",
      employer: "",
      dates: "",
      duties: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
  ]);
  const [addDisplayMode, setAddDisplayMode] = useState("add");

  const toggleEditDisplay = (experience) => {
    if (experience.editDisplayMode === "display") {
      experience.editDisplayMode = "edit";
    } else {
      experience.editDisplayMode = "display";
    }
    setExperiences([...experiences]);
  }

  const toggleAddDisplay = () => {
    if (addDisplayMode === "display") {
      setAddDisplayMode("add");
    } else {
      setAddDisplayMode("display");
    }
  }

  const addExperience = (e) => {
    e.preventDefault();
    let newBlank = {
      position: "",
      employer: "",
      dates: "",
      duties: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
    experiences.slice(-1)[0].editDisplayMode = "display";
    setExperiences(experiences.concat(newBlank));
    toggleAddDisplay();
  }

  const editExperience = (e, experience) => {
    e.preventDefault();
    setExperiences(experiences);
    toggleEditDisplay(experience);
  }

  const handlePositionChange = (e, experience) => {
    experience.position = e.target.value;
    setExperiences([...experiences]);
  }

  const handleEmployerChange = (e, experience) => {
    experience.employer = e.target.value;
    setExperiences([...experiences]);
  }

  const handleDatesChange = (e, experience) => {
    experience.dates = e.target.value;
    setExperiences([...experiences]);
  }

  const handleDutiesChange = (e, experience) => {
    experience.duties = e.target.value;
    setExperiences([...experiences]);
  }

  const experienceList = experiences.map((experience) => {
    if (experience.editDisplayMode === "hidden") {
      return (null);
    } else if (experience.editDisplayMode === "display") {
      return (
        <div className="experience-line-item" key={experience.id}>
          <DisplayedExperience experience={experience} />
          <button className="experience-edit-button" onClick={() => toggleEditDisplay(experience)}>Edit</button>
        </div>
      )
    } else {
      return (
        <div className="experience-edit" key={experience.id}>
          <form onSubmit={(e) => editExperience(e, experience)}>
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={experience.position}
              onChange={(e) => handlePositionChange(e, experience)}
              required
            />
            <input
              id="employer"
              type="text"
              placeholder="Employer"
              value={experience.employer}
              onChange={(e) => handleEmployerChange(e, experience)}
              required
            />
            <input
              id="dates"
              type="text"
              placeholder="Dates"
              value={experience.dates}
              onChange={(e) => handleDatesChange(e, experience)}
              required
            />
            <input
              id="duties"
              type="textarea"
              placeholder="Duties"
              value={experience.duties}
              onChange={(e) => handleDutiesChange(e, experience)}
              required
            />
            <button type="submit">Submit Edit</button>
          </form>
        </div>
      )
    }
  })
  if (addDisplayMode === "add") {
    return (
      <div>
        {experienceList}
        <div className="experience-add">
          <form onSubmit={addExperience}>
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={experiences.position}
              onChange={(e) => handlePositionChange(e, experiences.slice(-1)[0])}
              required
            />
            <input
              id="employer"
              type="text"
              placeholder="Employer"
              value={experiences.employer}
              onChange={(e) => handleEmployerChange(e, experiences.slice(-1)[0])}
              required
            />
            <input
              id="dates"
              type="text"
              placeholder="Dates"
              value={experiences.dates}
              onChange={(e) => handleDatesChange(e, experiences.slice(-1)[0])}
              required
            />
            <input
              id="duties"
              type="textarea"
              placeholder="Duties"
              value={experiences.duties}
              onChange={(e) => handleDutiesChange(e, experiences.slice(-1)[0])}
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
          <button className="experience-add-button" onClick={toggleAddDisplay}>Add Experience</button>
        </div>
      </div>
    )
  }
}

export default Experience;
