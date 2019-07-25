import React, { Component } from 'react';
import { connect } from 'react-redux';

import HabitCard from '../components/HabitCard';
import Button from '../components/UI/Button/Button';
import { getHabits } from '../actions/habits';
import './Habits.css';

class Habits extends Component {
  componentDidMount() {
    this.props.getHabits();
  }

  addHabitHandler = () => {
    this.props.history.push('/habit-form');
  };

  render() {
    return (
      <div className="HabitsContainer">
        <h1>Daily Habits</h1>
        {this.props.habits.map(habit => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
        <Button clicked={this.addHabitHandler}>Add Habit</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(Habits);
