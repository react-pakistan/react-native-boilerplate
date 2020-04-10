/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './App';
import { name as appName } from './app.json';
import configureStore from './src/globals/store';

// get store and middleware configured
const store = configureStore();

const RN01 = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RN01);
