import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/UI/Button/Button';
import { updateHabitFormData } from '../actions/habitForm';
import { createHabit } from '../actions/habits';
import CheckboxContainer from './CheckboxContainer';

class HabitForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentHabitFormData = { ...this.props.habitFormData, [name]: value };
    this.props.updateHabitFormData(currentHabitFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.history.push('/habits');
    this.props.createHabit(this.props.habitFormData);
  };

  render() {
    const { name, description } = this.props.habitFormData;

    return (
      <div>
        Add A Habit
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>
          <div>
            <CheckboxContainer />
          </div>
          <Button btnType="submit">Save habit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habitFormData: state.habitFormData
  };
};

export default connect(
  mapStateToProps,
  { updateHabitFormData, createHabit }
)(HabitForm);
