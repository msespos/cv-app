import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{fontSize: "xx-large", textAlign: "center"}}>General Info</div>
        <GeneralInfo />
        <div style={{fontSize: "xx-large", textAlign: "center"}}>Education</div>
        <Education />
        <div style={{fontSize: "xx-large", textAlign: "center"}}>Experience</div>
        <Experience />
      </div>
    );
  }
}

export default App;
