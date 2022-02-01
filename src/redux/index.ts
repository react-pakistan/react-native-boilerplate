import { combineReducers } from 'redux';
import { mainScreen } from './reducers';
import { IState } from './type';

export const rootReducer = combineReducers<IState>({
  mainScreen,
});
