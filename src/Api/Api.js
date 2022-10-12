

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';



const httpLink = createHttpLink({
  uri: 'https://glimesh.tv/api/graph',
});

const token = ((JSON.parse(localStorage.getItem('credentials'))).access_token);
console.log(token)
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const wsLink = new GraphQLWsLink(createClient({
  url: `wss://glimesh.tv/api/graph/websocket?vsn=2.0.0&token="${token}"`,
}));
wsLink.onopen = () => {
  wsLink.send(JSON.stringify(["1", "1", "__absinthe__:control", "phx_join", {}]));
};
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});








