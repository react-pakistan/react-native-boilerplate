// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Components Here ##########
import { mainScreenReducer } from '../screens/main-screen/reducers';

export const rootReducer = combineReducers({
  mainScreenReducer,
});
