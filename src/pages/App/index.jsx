import StatusBar from "../../components/StatusBar";
import { Styles } from "./Styles";
import Wallet from "../../components/Wallet";

const App = () => {
  return (
    <Styles>
      <StatusBar text="Connect your wallet" />
      <Wallet />
    </Styles>
  );
};

export default App;
