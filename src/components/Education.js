import React, { useState } from 'react';
import DisplayedEducation from './DisplayedEducation';
import uniqid from 'uniqid';
import '../styles/Education.css';

const Education = () => {
  const [educations, setEducations] = useState([
    {
      school: "",
      major: "",
      degree: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
  ]);
  const [addDisplayMode, setAddDisplayMode] = useState("add");

  const toggleEditDisplay = (education) => {
    if (education.editDisplayMode === "display") {       
      education.editDisplayMode = "edit";
    } else {
      education.editDisplayMode = "display";
    }
    setEducations([...educations])
  }
  
  const toggleAddDisplay = () => {
    if (addDisplayMode === "display") {
      setAddDisplayMode("add");
    } else {
      setAddDisplayMode("display");
    }
  }

  const addEducation = (e) => {
    e.preventDefault();
    let newBlank = {
      school: "",
      major: "",
      degree: "",
      id: uniqid(),
      editDisplayMode: "hidden",
    }
    educations.slice(-1)[0].editDisplayMode = "display";
    setEducations(educations.concat(newBlank));
    toggleAddDisplay();
  }

  const editEducation = (e, education) => {
    e.preventDefault();
    setEducations(educations);
    toggleEditDisplay(education);
  }

  const handleSchoolChange = (e, education) => {
    education.school = e.target.value;
    setEducations([...educations]);
  }

  const handleMajorChange = (e, education) => {
    education.major = e.target.value;
    setEducations([...educations]);
  }

  const handleDegreeChange = (e, education) => {
    education.degree = e.target.value;
    setEducations([...educations]);
  }

  const educationList = educations.map((education) => {
    if (education.editDisplayMode === "hidden") {
      return (null);
    } else if (education.editDisplayMode === "display") {
      return (
        <div className="education-line-item" key={education.id}>
          <DisplayedEducation education={education} />
          <button className="education-edit-button" onClick={() => toggleEditDisplay(education)}>Edit</button>
        </div>
      )
    } else {
      return (
        <div className="education-edit" key={education.id}>
          <form onSubmit={(e) => editEducation(e, education)}>
            <input
              id="school"
              type="text"
              placeholder="School"
              value={education.school}
              onChange={(e) => handleSchoolChange(e, education)}
              required
            />
            <input
              id="major"
              type="text"
              placeholder="Major"
              value={education.major}
              onChange={(e) => handleMajorChange(e, education)}
              required
            />
            <input
              id="degree"
              type="text"
              placeholder="degree"
              value={education.degree}
              onChange={(e) => handleDegreeChange(e, education)}
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
        {educationList}
        <div className="education-add">
          <form onSubmit={addEducation}>
            <input
              id="school"
              type="text"
              placeholder="School"
              value={educations.school}
              onChange={(e) => handleSchoolChange(e, educations.slice(-1)[0])}
              required
            />
            <input
              id="major"
              type="text"
              placeholder="Major"
              value={educations.major}
              onChange={(e) => handleMajorChange(e, educations.slice(-1)[0])}
              required
            />
            <input
              id="degree"
              type="text"
              placeholder="degree"
              value={educations.degree}
              onChange={(e) => handleDegreeChange(e, educations.slice(-1)[0])}
              required
            />
            <button type="submit">Submit Education</button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="education-with-add-button">
        {educationList}
        <div>
          <button className="education-add-button" onClick={toggleAddDisplay}>Add Education</button>
        </div>
      </div>
    )
  }
}

export default Education;
