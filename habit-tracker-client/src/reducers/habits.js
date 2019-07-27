export default (state = [], action) => {
  switch (action.type) {
    case 'GET_HABIT_SUCCESS':
      return action.habits;

    case 'CREATE_HABIT_SUCCESS':
      return state.concat(action.habit);

    case 'UPDATE_HABIT_SUCCESS':
      return state.map(h => (h.id === action.habit.id ? action.habit : h));
    // state.map(h => {

    //   if (h.id === action.habit.id) {
    //     return action.habit;
    //   } else {
    //     return h;
    //   }
    // });
    default:
      return state;
  }
};
