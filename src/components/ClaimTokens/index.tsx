import { useEffect, useState } from "react";

import { Styles } from "./Styles";
import { sandbox } from "../../assets";

const greyOutBtnStyles = {
  color: "white",
  background: "gray",
  cursor: "initial",
};

const ClaimTokens = ({
  smartContract,
  account,
  networkChainID,
  isTransactionSuccessful,
  setIsTransactionSuccessful,
}) => {
  const [transactionHash, setTransactionHash] = useState("");
  const [isAccountParticipating, setIsAccountParticipating] = useState(false);
  const [greyOutBtn, setgreyOutBtn] = useState(false);

  const checkIsAccountParticipating = async () => {
    const result = await smartContract.methods.isParticipating(account).call();
    setIsAccountParticipating(result);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkIsAccountParticipating(), [account]);

  // const options = {
  //   filter: {
  //     account,
  //   },
  //   fromBlock: 0,
  // };

  // smartContract.events.NewParticipant(options).on("data", (event) => {
  //   if (!isTransactionSuccessful) {
  //     console.log("Cought NewParticipant event: ", event);
  //     setIsTransactionSuccessful(true);
  //   }
  // });

  const claimTokens = () =>
    !isAccountParticipating &&
    smartContract.methods
      .participate()
      .send({ from: account })
      .on("transactionHash", (hash) => {
        setgreyOutBtn(true);
        setTimeout(() => setTransactionHash(hash), 5000);
      })
      .then((res) => {
        setgreyOutBtn(false);
        console.log("Block data: ", res);
        return res.status
          ? setIsTransactionSuccessful(true)
          : setTransactionHash("");
      });

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
                  isAccountParticipating || greyOutBtn
                    ? { ...greyOutBtnStyles }
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
