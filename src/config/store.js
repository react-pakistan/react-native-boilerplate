/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLogger from "redux-logger";

// ########## Import Components Here ##########
import rootReducer from "../reducers";
import rootSaga from "../sagas";

export default () => {
  // middlewares configuration
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, reduxLogger];
  const applyMiddlewares = [applyMiddleware(...middlewares)];

  // integrate Redux DevTools if available
  const composedEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composedEnhancers(...applyMiddlewares);

  // create store
  const store = createStore(rootReducer, enhancers);

  // start sagas
  sagaMiddleware.run(rootSaga);

  return store;
};
