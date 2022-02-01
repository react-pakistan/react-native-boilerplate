import {
  ApolloClient,
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink } from '@apollo/client/core';
import ENV from 'react-native-config';

const link = new HttpLink({
  uri: ENV.GRAPHQL_ENDPOINT,
  credentials: 'same-origin',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
