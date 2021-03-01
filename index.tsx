// ########## Import Dependencies Here ##########
import React, { ReactElement } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// ########## Import Components Here ##########
import { App } from './App';
import { name as appName } from './app.json';
import { configureStore } from './src/globals/store';
import { appTheme } from './src/theme';

// get store and middleware configured
const store = configureStore();

const RN01 = () : ReactElement => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => RN01);
