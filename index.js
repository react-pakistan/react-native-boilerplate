// ########## Import Dependencies Here ##########
import { theme } from '@react-pakistan/react-native-commons-collection/theme';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// ########## Import Components Here ##########
import { App } from './App';
import { name as appName } from './app.json';
import configureStore from './src/globals/store';

// get store and middleware configured
const store = configureStore();

const RN01 = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => RN01);
