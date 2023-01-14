import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div style={{maxWidth: "60ch", margin: "0 auto"}}>
        <div style={{fontSize: "xxx-large", textAlign: "center"}}>Resume Builder</div>
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
