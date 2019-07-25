import React from 'react';

const HabitCard = ({ habit }) => (
  <div key={habit.id} className="HabitCard">
    <h3>{habit.name}</h3>
    <p>Streak: ${habit.streak}</p>
    <p>description: ${habit.description}</p>
  </div>
);

export default HabitCard;
