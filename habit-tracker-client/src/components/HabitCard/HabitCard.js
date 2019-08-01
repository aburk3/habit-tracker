import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateHabitStreak } from '../../actions/habits';
import classes from './HabitCard.module.css';
import { connect } from 'react-redux';
import Button from '../UI/Button/Button';

const HabitCard = ({ habit, updateHabitStreak, props }) => {
  const handleIncrement = (habit, incrementType) => {
    if (incrementType === 'ADD') {
      updateHabitStreak({ ...habit, streak: habit.streak + 1 });
    } else if (incrementType === 'SUBTRACT') {
      updateHabitStreak({ ...habit, streak: habit.streak - 1 });
    }
  };

  const habitVotesHandler = () => {
    console.log('in habitVotesHandler');
  };

  return (
    <div key={habit.id} className={classes.HabitCard}>
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
      <Button btnStyle="Create" clicked={() => habitVotesHandler()}>
        Vote on
      </Button>
    </div>
  );
};

export default connect(
  null,
  { updateHabitStreak }
)(HabitCard);
