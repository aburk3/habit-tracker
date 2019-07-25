import React, { Component } from 'react';

import Habits from '../containers/Habits';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Habits />
      </div>
    );
  }
}

export default App;
