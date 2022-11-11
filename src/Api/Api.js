

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from '../constants/config';



const httpLink = createHttpLink({
  uri: config.uri,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('credentials'));
  // return the headers to the context so httpLink can read them
  const dt = token.access_token
  return {
    headers: {
      ...headers,
      authorization: dt ? `Bearer ${dt}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});








