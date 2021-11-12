import { BSC, ETH, MetaMask, not_selected, selected } from "../../assets";

import { Styles } from "./Styles";

const Wallet = () => {
  return (
    <Styles>
      <div className="app-header">Connect your wallet</div>
      <div className="app-body">
        <div className="app-body-network">
          <span className="app-body-network-header">Network</span>
          <span className="app-body-network-header-description">
            Please select one of the following options
          </span>
          <div className="network-field">
            <div className="network-field-title">
              <img
                style={{ width: "24px", height: "24px", marginRight: "5px" }}
                src={ETH}
                alt="ETH img"
              />
              <span>ETH Mainnnet</span>
            </div>
            <img
              style={{ width: "36px", height: "36px" }}
              src={not_selected}
              alt="not selected checkbox"
            />
          </div>
          <div
            className="network-field"
            style={{ border: "2px solid #0341F5" }}
          >
            <div className="network-field-title">
              <img
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
                src={BSC}
                alt="BSC img"
              />
              <span>BSC</span>
            </div>
            <img
              style={{
                width: "36px",
                height: "36px",
              }}
              src={selected}
              alt="not selected checkbox"
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
            />
          </div>
          <button className="connect-btn">Connect</button>
        </div>
      </div>
    </Styles>
  );
};

export default Wallet;
