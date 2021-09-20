import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

import App from './App';

const client = new ApolloClient({
  uri: 'https://e729f1c3da7e02.localhost.run',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
