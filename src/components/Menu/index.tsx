import { HamburgerMenu } from "./HamburgerMenu";
import { Styles } from "./Styles";
import { useMemo } from "react";

interface Props {
  active: boolean;
  account: string | undefined | null;
  connect: () => Promise<void>;
}

const Menu = ({ active, account, connect }: Props) => {
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
      <HamburgerMenu
        active={active}
        accountAbbreviated={accountAbbreviated}
        connect={connect}
      />
    </Styles>
  );
};

export default Menu;
