// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Components Here ##########
import { mainScreen } from '../screens/main-screen/reducers';
import { profileScreen } from '../screens/profile/reducers';

export const rootReducer = combineReducers({
  mainScreen,
  profileScreen,
});
