import Menu from "../../components/Menu";
import Wallet from "../../components/Wallet";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import styled from "styled-components";

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

const getLibrary = (provider: string) => new Web3(provider);

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Styles>
        <Menu />
        <Wallet />
      </Styles>
    </Web3ReactProvider>
  );
};

export default App;
