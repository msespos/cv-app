import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [displayMode, setDisplayMode] = useState("edit");

  if (displayMode === "edit") {
    return (
      <div className="title-edit">
        <form onSubmit={() => setDisplayMode("display")}>
          <input
            id="firstName"
            type="text"
            placeholder="First"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            id="lastName"
            type="text"
            placeholder="Last"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit Info</button>
      </form>
      </div>
    )
  } else {
    return (
      <div>
        <div className="title-display">
          <div>
            {firstName + " " + lastName}
          </div>
          <div>
            {email}
          </div>
        </div>
        <div className="tiny-edit-button-container">
          <button className="tiny-edit-button" onClick={() => setDisplayMode("edit")}>
            Edit Info
          </button>
        </div>
      </div>
    )
  }
}

export default GeneralInfo;
