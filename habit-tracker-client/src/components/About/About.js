import React from 'react';
import Header from '../Header';

const About = () => {
  return (
    <>
      <Header />

      <div>
        The intention of this application is to allow a user to easily track
        habits. First, you can add a new habit that has a name and description.
        Next, each time you complete/perform the habit, you can increment the
        habit as desired to track your current 'habit-streak'.
      </div>
    </>
  );
};

export default About;
