import logo from './logo.svg';
import './App.css';
import {useAccount, useConnect,} from 'wagmi'
import {InjectedConnector} from "wagmi/connectors/injected"
function App() {
  const {address, isConnected} = useAccount()
  const {connect} = useConnect({
    connector : new InjectedConnector()
   })
  return (
    <div className="App">
        <h1>this is testing  page</h1>
        <button onClick={connect}>connect wallet</button>
          {isConnected && <h3>{address}</h3>}
    </div>
  );
}

export default App;
