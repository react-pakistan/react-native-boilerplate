import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { configureStore } from './globals/store';
import { MainNavigation } from './navigation';
import { appTheme } from './theme';

// get store and middleware configured
const store = configureStore();

export const App = () : ReactElement => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  </ThemeProvider>
);
