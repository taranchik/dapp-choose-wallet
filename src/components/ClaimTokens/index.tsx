import { useMemo, useState } from "react";

import { Styles } from "./Styles";
import { generateKey } from "crypto";
import { isWhiteSpaceLike } from "typescript";
import { sandbox } from "../../assets";

const greyOutBtn = {
  color: "white",
  background: "gray",
  cursor: "initial",
};

const ClaimTokens = ({
  smartContract,
  account,
  networkChainID,
  setIsTransactionSuccessful,
}) => {
  const [transactionHash, setTransactionHash] = useState("");

  const isAccountParticipating = useMemo(
    () =>
      smartContract && smartContract.methods.isParticipating(account).call(),
    [account]
  );

  const claimTokens = () =>
    !isAccountParticipating &&
    smartContract.methods
      .participate()
      .send({ from: account })
      .on("receipt", function (receipt) {
        console.log(receipt);
      })
      .on("transactionHash", (hash) => setTransactionHash(hash));

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  setInterval(
    () =>
      smartContract.methods
        .isParticipating(account)
        .call()
        .then((res) => console.log("isParticipating", res)),
    10000
  );

  setInterval(
    () =>
      smartContract.methods
        .numberOfParticipants()
        .call()
        .then((res) => console.log("participants", res)),
    10000
  );

  return (
    <Styles>
      <div className="app-header">Claim your FREE tokens</div>
      <div className="app-body">
        <div className="app-body-tokens">
          <span className="app-body-tokens-header">
            We will give away free tokens!
          </span>
          {transactionHash ? (
            <div className="flex-center-wrapper">
              <div className="app-body-tokens-loot">
                <img
                  style={{ width: "172px", height: "170px" }}
                  src={sandbox}
                  alt="sandbox img"
                />
              </div>
              <div className="waiting-transaction">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={sandbox}
                  alt="sandbox img"
                />
                Waiting for the transaction...
              </div>
              {networkChainID === 5 ? (
                <span
                  onClick={() =>
                    openInNewTab(
                      `https://goerli.etherscan.io/tx/${transactionHash}`
                    )
                  }
                  className="check-transaction"
                >
                  View on Etherscan
                </span>
              ) : (
                <span
                  onClick={() =>
                    openInNewTab(
                      `https://testnet.bscscan.com/tx/${transactionHash}`
                    )
                  }
                  className="check-transaction"
                >
                  View on BscScan
                </span>
              )}
            </div>
          ) : (
            <div className="flex-center-wrapper">
              <div className="app-body-tokens-loot">
                <div className="loot-square"></div>
              </div>
              <div
                style={
                  isAccountParticipating
                    ? { ...greyOutBtn }
                    : { background: "#0ffff1" }
                }
                onClick={claimTokens}
                className="claim-btn"
              >
                Claim
              </div>
            </div>
          )}
        </div>
      </div>
    </Styles>
  );
};

export default ClaimTokens;
