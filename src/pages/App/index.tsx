import {
  abi,
  binanceContractAddress,
  goerliContractAddress,
} from "../../assets";
import { useMemo, useState } from "react";

import ClaimTokens from "../../components/ClaimTokens";
import ConnectWallet from "../../components/ConnectWallet";
import { InjectedConnector } from "@web3-react/injected-connector";
import Menu from "../../components/Menu";
import ThankYou from "../../components/ThankYou";
import Web3 from "web3";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

const Styles = styled.div`
  & {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
`;

const web3 = new Web3(window.web3.currentProvider);

const App = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false);
  const [networkChainID, setNetoworkChainID] = useState(0);

  const smartContract = useMemo(
    () =>
      active &&
      new web3.eth.Contract(
        abi,
        networkChainID === 5 ? goerliContractAddress : binanceContractAddress
      ),
    [active]
  );

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

  return (
    <Styles>
      <Menu active={active} account={account} connect={connect} />
      {active ? (
        isTransactionSuccessful ? (
          <ThankYou />
        ) : (
          <ClaimTokens
            account={account}
            smartContract={smartContract}
            networkChainID={networkChainID}
            isTransactionSuccessful={isTransactionSuccessful}
            setIsTransactionSuccessful={setIsTransactionSuccessful}
          />
        )
      ) : (
        <ConnectWallet
          networkChainID={networkChainID}
          setNetoworkChainID={setNetoworkChainID}
          connect={connect}
        />
      )}
    </Styles>
  );
};

export default App;
