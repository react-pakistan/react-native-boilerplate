// ########## Import Dependencies Here ##########
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// ########## Import Components Here ##########
import { rootReducer } from '../redux';

export default () => {
  // middlewares configuration
  const middlewares = [reduxThunk, reduxLogger];
  const applyMiddlewares = [applyMiddleware(...middlewares)];

  // integrate Redux DevTools if available
  /* eslint-disable-next-line */
  const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composedEnhancers(...applyMiddlewares);

  // create store
  const store = createStore(rootReducer, enhancers);
  return store;
};
