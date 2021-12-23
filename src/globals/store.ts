/* eslint-disable */

import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { rootReducer } from '../redux';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk, reduxLogger),
  );
  return store;
};
