import React, { Component } from 'react';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      displayMode: "edit",
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  toggleDisplay(e) {
    e.preventDefault();
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

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    if (this.state.displayMode === "edit") {
      return (
        <div className="title-edit">
          <form onSubmit={this.toggleDisplay}>
            <input
              id="firstName"
              type="text"
              placeholder="First"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              required
            />
            <input
              id="lastName"
              type="text"
              placeholder="Last"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
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
              {this.state.firstName + " " + this.state.lastName}
            </div>
            <div>
              {this.state.email}
            </div>
          </div>
          <div className="tiny-edit-button-container">
            <button className="tiny-edit-button" onClick={this.toggleDisplay}>Edit Info</button>
          </div>
        </div>
      )
    }
  }
}

export default GeneralInfo;
