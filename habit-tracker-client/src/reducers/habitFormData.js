const initialState = {
  name: '',
  description: '',
  streak: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DATA':
      return action.habitFormData;

    case 'RESET_HABIT_FORM':
      return initialState;

    default:
      return state;
  }
};
