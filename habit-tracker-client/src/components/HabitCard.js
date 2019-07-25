import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HabitCard = ({ habit }) => (
  <div key={habit.id} className="HabitCard">
    <h3>{habit.name}</h3>
    <p>Streak: {habit.streak}</p>
    <FontAwesomeIcon icon={faArrowUp} />
    <br />
    <FontAwesomeIcon icon={faArrowDown} />
    <p>
      <b>Description:</b> {habit.description}
    </p>
  </div>
);

export default HabitCard;
