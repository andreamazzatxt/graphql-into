import { ApolloClient, ApolloProvider, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MutationExample } from './components/MutationExample';
import { QueryExample } from './components/QueryExample';
import { MetaFix } from './types';

const GITHUB_TOKEN = (import.meta as MetaFix).env.VITE_GITHUB_TOKEN
const GITHUB_ENDPOINT = 'https://api.github.com/graphql'

const link = createHttpLink({
  uri: GITHUB_ENDPOINT,
  headers: {
    'Authorization': 'token ' + GITHUB_TOKEN
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false }),
  connectToDevTools: true
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <QueryExample />
      {/* <MutationExample /> */}
    </ApolloProvider>
  </React.StrictMode>,
)
