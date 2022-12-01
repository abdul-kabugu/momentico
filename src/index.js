import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
    
  <WagmiConfig client={client}>
    <App />
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
