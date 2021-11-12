import { Styles } from "./Styles";
import { useState } from "react";

const StatusBar = ({ text }) => {
  const [makeAnimation, setMakeAnimation] = useState(false);

  const animateHamburgerBtn = () => setMakeAnimation(!makeAnimation);

  return (
    <Styles>
      <div className="StatusBar-content">{text}</div>
      <div
        className={`${makeAnimation ? "change" : ""} hamburger-btn`}
        onClick={animateHamburgerBtn}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </Styles>
  );
};

export default StatusBar;
