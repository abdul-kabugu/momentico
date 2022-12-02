import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {Provider} from 'react-redux'
import { store } from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom'
//import {MoralisProvider} from 'react-moralis'
import {ApolloProvider} from '@apollo/client'
import { apolloClient } from './graphql/apolo/apoloClient';
import {WagmiConfig, configureChains, defaultChains, chain, createClient} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'

const root = ReactDOM.createRoot(document.getElementById('root'));
const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

const client = createClient({
  provider,
  webSocketProvider,
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <WagmiConfig client={client}>
      <Router>
      <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
    </Router>
 </WagmiConfig>
    </Provider>
    
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

