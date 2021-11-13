import { HamburgerMenu } from "./HamburgerMenu";
import { Styles } from "./Styles";
import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";

const Menu = () => {
  const { active, account } = useWeb3React();

  const accountAbbreviated = useMemo(
    () =>
      account &&
      `${account.substring(0, 6)}...${account.substring(
        account.length - 5,
        account.length
      )}`,
    [account]
  );

  return (
    <Styles>
      <div className="menu-content">
        {active ? accountAbbreviated : "Connect your wallet"}
      </div>
      <HamburgerMenu />
    </Styles>
  );
};

export default Menu;
