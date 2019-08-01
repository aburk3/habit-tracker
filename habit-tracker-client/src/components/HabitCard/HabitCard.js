import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateHabitStreak } from '../../actions/habits';
import classes from './HabitCard.module.css';
import { connect } from 'react-redux';
import Button from '../UI/Button/Button';

class HabitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { votes: 0 };
  }

  habitVotesHandler = () => {
    this.setState({
      ...this.state,
      votes: this.state.votes + 1
    });
  };

  render() {
    const votes = this.state.votes;

    const handleIncrement = (habit, incrementType) => {
      if (incrementType === 'ADD') {
        updateHabitStreak({ ...habit, streak: habit.streak + 1 });
      } else if (incrementType === 'SUBTRACT') {
        updateHabitStreak({ ...habit, streak: habit.streak - 1 });
      }
    };

    return (
      <div key={this.props.habit.id} className={classes.HabitCard}>
        <h3>{this.props.habit.name}</h3>
        <p>Streak: {this.props.habit.streak}</p>
        <FontAwesomeIcon
          onClick={() => handleIncrement(this.props.habit, 'ADD')}
          icon={faArrowUp}
          className={classes.Arrow}
        />
        <br />
        <FontAwesomeIcon
          onClick={() => handleIncrement(this.props.habit, 'SUBTRACT')}
          icon={faArrowDown}
          className={classes.Arrow}
        />
        <p>
          <b>Description:</b> {this.props.habit.description}
        </p>
        <Button btnStyle="Create" clicked={() => this.habitVotesHandler()}>
          Vote on
        </Button>
        <p>{votes}</p>
      </div>
    );
  }
}

export default connect(
  null,
  { updateHabitStreak }
)(HabitCard);
