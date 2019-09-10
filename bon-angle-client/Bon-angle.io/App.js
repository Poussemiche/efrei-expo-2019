import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

const App = () => (
<ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>
)

export default App;