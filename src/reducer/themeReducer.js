export const initialTheme = 'irBlack';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return action.payload;
    default:
      return state;
  }
};
