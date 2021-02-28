import { combineReducers } from 'redux';
import { mainScreen, profileScreen } from './reducers';
import { IState } from './type';

export const rootReducer = combineReducers<IState>({
  mainScreen,
  profileScreen,
});
