// if user has changed theme before, than get data from localstorage
const obj = localStorage.theme;

const userData = obj ? JSON.parse(obj) : null;

export const initialTheme = userData ? userData.userTheme : 'irBlack';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return action.payload;
    default:
      return state;
  }
};
