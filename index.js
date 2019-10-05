// ########## Import Dependencies Here ##########
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

// ########## Import Components Here ##########
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/config/store';

// get store and middleware configured
const store = configureStore();

const RN01 = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RN01);
