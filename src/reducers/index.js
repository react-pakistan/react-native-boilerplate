// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Components Here ##########
import showAppReducer from '../containers/MainScreen/reducers';

const rootReducer = combineReducers({
  showAppReducer,
});

export default rootReducer;
