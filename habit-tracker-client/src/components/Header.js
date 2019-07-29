import React from 'react';

const Header = props => {
  const getTitle = () => {
    switch (props.path) {
      case '/habits':
        return 'Habit Tracker';
      case '/new':
        return 'Create a new habit';
      case '/about':
        return 'About This App';
      default:
        return 'Habit Tracker';
    }
  };

  return <h2>{getTitle()}</h2>;
};

export default Header;
