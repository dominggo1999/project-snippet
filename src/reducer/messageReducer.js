// Reducer
export const displayMessage = false;
export const reducer = (state, action) => {
  switch (action) {
    case 'showMessage':
      return true;
    case 'hideMessage':
      return false;
    default:
      return state;
  }
};
