import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';

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
