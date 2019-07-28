import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Habits from './containers/Habits';
import HabitForm from './containers/HabitForm';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Switch>
          <Route path="/" exact component={Habits} />
          <Route path="/habits" component={Habits} />
          <Route path="/new" component={HabitForm} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
