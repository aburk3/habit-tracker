export default (state = [], action) => {
  switch (action.type) {
    case 'GET_HABIT_SUCCESS':
      return action.habits;

    case 'CREATE_HABIT_SUCCESS':
      return state.concat(action.habit);

    default:
      return state;
  }
};
