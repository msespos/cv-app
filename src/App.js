import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
