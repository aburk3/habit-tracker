import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Habit Tracker
    </NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
  </ul>
);

export default NavigationItems;
