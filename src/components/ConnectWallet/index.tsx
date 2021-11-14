import { BSC, ETH, MetaMask, not_selected, selected } from "../../assets";

import { Styles } from "./Styles";

interface Props {
  networkChainID: number;
  setNetoworkChainID: () => void;
  connect: () => Promise<void>;
}

const ConnectWallet = ({ networkChainID, setNetoworkChainID, connect }: Props) => {
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
          <div onClick={connect} className="connect-btn">
            Connect
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ConnectWallet;
