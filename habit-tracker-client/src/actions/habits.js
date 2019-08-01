import { resetHabitForm } from './habitForm';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * Action Creators
 **/
const setHabits = habits => {
  return {
    type: 'GET_HABIT_SUCCESS',
    habits
  };
};

const addHabit = habit => {
  return {
    type: 'CREATE_HABIT_SUCCESS',
    habit
  };
};

const updateHabit = habit => {
  return {
    type: 'UPDATE_HABIT_SUCCESS',
    habit
  };
};

/**
 * Async Actions
 */
export const getHabits = () => {
  return dispatch => {
    return fetch(`${API_URL}/habits`)
      .then(response => response.json())
      .then(habits => dispatch(setHabits(habits)))
      .catch(error => console.log(error));
  };
};

export const createHabit = habit => {
  console.log('c');
  return dispatch => {
    return fetch(`${API_URL}/habits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ habit: habit })
    })
      .then(response => response.json())
      .then(habit => {
        console.log('d');
        dispatch(addHabit(habit));
        dispatch(resetHabitForm());
      })
      .catch(error => console.log(error));
  };
};

export const updateHabitStreak = habit => {
  return dispatch => {
    return fetch(`${API_URL}/habits/${habit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habit)
    })
      .then(response => response.json())

      .then(data => dispatch(updateHabit(data)))
      .catch(error => console.log(error));
  };
};
