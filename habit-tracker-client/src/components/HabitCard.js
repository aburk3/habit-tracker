import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateHabitStreak } from '../actions/habits';
import classes from './HabitCard.module.css';
import { connect } from 'react-redux';

const HabitCard = ({ habit, updateHabitStreak }) => {
  const handleIncrement = (habit, incrementType) => {
    if (incrementType === 'ADD') {
      console.log('Adding');
      updateHabitStreak({ ...habit, streak: habit.streak + 1 });
    } else if (incrementType === 'SUBTRACT') {
      console.log('Subtracting');
      updateHabitStreak({ ...habit, streak: habit.streak - 1 });
    }
  };

  return (
    <div key={habit.id} className="HabitCard">
      <h3>{habit.name}</h3>
      <p>Streak: {habit.streak}</p>
      <FontAwesomeIcon
        onClick={() => handleIncrement(habit, 'ADD')}
        icon={faArrowUp}
        className={classes.Arrow}
      />
      <br />
      <FontAwesomeIcon
        onClick={() => handleIncrement(habit, 'SUBTRACT')}
        icon={faArrowDown}
        className={classes.Arrow}
      />
      <p>
        <b>Description:</b> {habit.description}
      </p>
    </div>
  );
};

export default connect(
  null,
  { updateHabitStreak }
)(HabitCard);
