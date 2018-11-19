/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { applyMiddleware, compose, createStore } from "redux";
import reduxLogger from "redux-logger";
import rootReducer from "../reducers";

export default () => {
  // middlewares configuration
  const middlewares = [reduxLogger];
  const applyMiddlewares = [applyMiddleware(...middlewares)];

  // integrate Redux DevTools if available
  const composedEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composedEnhancers(...applyMiddlewares);

  // create store
  const store = createStore(rootReducer, enhancers);
  return store;
};
