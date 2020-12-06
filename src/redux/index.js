// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Components Here ##########
import { mainScreen, profileScreen } from './reducers';

export const rootReducer = combineReducers({
  mainScreen,
  profileScreen,
});
