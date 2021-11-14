import styled from "styled-components";
import { useState } from "react";

export const Styles = styled.div`
  & {
    display: none;
    white-space: nowrap;
  }

  .hamburger-btn {
    padding-right: 33px;
    display: inline-block;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #0ffff1;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  ul {
    background-color: #0ffff1;
    width: 155px;
    margin: 20px 25px 0 0;
    position: absolute;
    right: -18px;
    list-style-type: none;
    padding: 10px;
  }

  ul li {
    margin: 5px 0;
  }

  ul li:hover {
    color: #96332c;
    cursor: pointer;
  }

  .abbreviationText:hover {
    cursor: initial;
    color: black;
  }

  @media (max-width: 600px) {
    & {
      display: block;
    }
  }
`;

interface Props {
  active: boolean;
  accountAbbreviated: string | undefined | null;
  connect: () => Promise<void>;
}

export const HamburgerMenu = ({ active, accountAbbreviated, connect }) => {
  const [makeAnimation, setMakeAnimation] = useState(false);

  const animateHamburgerBtn = () => setMakeAnimation(!makeAnimation);

  return (
    <Styles>
      <div
        className={`${makeAnimation ? "change" : ""} hamburger-btn`}
        onClick={animateHamburgerBtn}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul style={{ display: makeAnimation ? "block" : "none" }}>
        {active ? (
          <li className="abbreviationText">{accountAbbreviated}</li>
        ) : (
          <li onClick={connect}>Connect</li>
        )}
      </ul>
    </Styles>
  );
};
