import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/UI/Button/Button';
import { updateHabitFormData } from '../actions/habitForm';
import { createHabit } from '../actions/habits';
import Header from '../components/Header';

import './HabitForm.css';

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
        <Header path={this.props.location.pathname} />

        <form onSubmit={this.handleOnSubmit}>
          <div className="Input1">
            <label htmlFor="name">Name:</label>
            <input
              className="InputField"
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div className="Input1">
            <label htmlFor="description">Description:</label>
            <input
              className="InputField"
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>
          <Button btnStyle="Create" btnType="submit">
            Save habit
          </Button>
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
