import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Habits from './containers/Habits';
import HabitForm from './containers/HabitForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/habits" component={Habits} />
          <Route path="/habit-form" component={HabitForm} />
          <Route path="/" exact component={Habits} />
        </Switch>
      </div>
    );
  }
}

export default App;
