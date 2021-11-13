import { BSC, ETH, MetaMask, not_selected, selected } from "../../assets";

import { InjectedConnector } from "@web3-react/injected-connector";
import { Styles } from "./Styles";
import { useState } from "react";
import { useWeb3React } from "@web3-react/core";

const Wallet = () => {
  const [networkChainID, setNetoworkChainID] = useState(0);
  const { activate, deactivate } = useWeb3React();

  const connect = async () => {
    const injected = new InjectedConnector({
      supportedChainIds: [networkChainID ? networkChainID : 97],
    });

    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  const selectNetwork = (networkChainID: number) => {
    setNetoworkChainID(networkChainID);
  };

  return (
    <Styles>
      <div className="app-header">Connect your wallet</div>
      <div className="app-body">
        <div className="app-body-network">
          <span className="app-body-network-header">Network</span>
          <span className="app-body-network-header-description">
            Please select one of the following options
          </span>
          <div
            className="network-field"
            style={networkChainID === 5 ? { border: "2px solid #0341F5" } : {}}
            onClick={() => selectNetwork(5)}
          >
            <div className="network-field-title">
              <img
                style={{ width: "24px", height: "24px", marginRight: "5px" }}
                src={ETH}
                alt="ETH img"
              />
              <span>Goerli Test Network</span>
            </div>
            <img
              style={{ width: "36px", height: "36px" }}
              src={networkChainID === 5 ? selected : not_selected}
              alt="not selected checkbox"
              draggable="false"
            />
          </div>
          <div
            className="network-field"
            style={
              networkChainID === 97 || networkChainID === 0
                ? { border: "2px solid #0341F5" }
                : {}
            }
            onClick={() => selectNetwork(97)}
          >
            <div className="network-field-title">
              <img
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
                src={BSC}
                alt="BSC img"
              />
              <span>Binance Chain Testnet</span>
            </div>
            <img
              style={{
                width: "36px",
                height: "36px",
              }}
              src={
                networkChainID === 97 || networkChainID === 0
                  ? selected
                  : not_selected
              }
              alt="not selected checkbox"
              draggable="false"
            />
          </div>
          <span
            style={{ margin: "24px 0" }}
            className="app-body-network-header"
          >
            Wallets
          </span>
          <div className="network-field-wallets">
            <div className="network-field-title">
              <img
                style={{ width: "60px", height: "60px", marginRight: "12px" }}
                src={MetaMask}
                alt="MetaMask img"
              />
              <span>MetaMask</span>
            </div>
            <img
              style={{
                width: "36px",
                height: "36px",
              }}
              src={selected}
              alt="not selected checkbox"
              draggable="false"
            />
          </div>
          <button onClick={connect} className="connect-btn">
            Connect
          </button>
        </div>
      </div>
    </Styles>
  );
};

export default Wallet;
