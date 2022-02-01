import { ApolloProvider } from '@apollo/client/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { MainNavigation } from './navigation';
import { client } from './graphql';
import { store } from './redux/store';
import { appTheme } from './theme';

export const App = () : ReactElement => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </ThemeProvider>
  </ApolloProvider>
);
