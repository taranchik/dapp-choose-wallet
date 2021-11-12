import styled from "styled-components";

export const Styles = styled.div`
  & {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 80px;
  }

  .StatusBar-content {
    height: 56px;
    background: #0ffff1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 12px;
  }

  .hamburger-btn {
    display: none;
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

  @media (max-width: 600px) {
    .hamburger-btn {
      display: inline-block;
    }

    .StatusBar-content {
      display: none;
    }
  }
`;
