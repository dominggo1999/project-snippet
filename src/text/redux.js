export const store = `
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// If middleware > 1, make array
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
`;

export const rootReducer = `
import { combineReducers } from 'redux';

//import reducer here 
import someReducer from './someReducer/someReducer';

export default combineReducers({
  test: someReducer,
});
`;

export const actionTypes = `
export const someNameTypes = {
  TOGGLE_NAVBAR: 'TOGGLE_NAVBAR',
};
`;

export const actions = `
import { navbarActionTypes } from './navbarActionTypes';

const { TOGGLE_NAVBAR } = someNameTypes;

export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});
`;

export const reducer = `
import { navbarActionTypes } from './navbarActionTypes';

const { TOGGLE_NAVBAR } = navbarActionTypes;

const INITIAL_STATE = {
  displayNavbarMobile: false,
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        displayNavbarMobile: !state.displayNavbarMobile,
      };
    default:
      return state;
  }
};

export default navbarReducer;
`;
