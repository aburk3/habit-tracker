/**
 * Action Creators
 */
export const updateHabitFormData = habitFormData => {
  return {
    type: 'UPDATED_DATA',
    habitFormData
  };
};

export const resetHabitForm = () => {
  return {
    type: 'RESET_HABIT_FORM'
  };
};
