import styled from "styled-components";

export const Styles = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }

  .app-header {
    height: 68px;
    width: 441px;
    background: #ff469f;
    margin-top: 20px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app-body {
    width: 570px;
    height: 594px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .app-body-tokens {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 40px 20px;
  }

  .app-body-tokens-header {
    text-align: center;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #002299;
  }

  .app-body-tokens-loot {
    width: 450px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    margin: 50px 0 25px 0;
  }

  .loot-square {
    width: 200px;
    height: 200px;
    background: #2d9cdb;
  }

  .loot-square:hover {
    width: 205px;
    height: 205px;
  }

  .claim-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: static;
    width: 367px;
    height: 56px;
    background: #0ffff1;

    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #002299;
    margin: 30px auto 0 auto;
  }

  .claim-btn:hover {
    cursor: pointer;
  }

  .waiting-transaction {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 367px;
    height: 56px;

    background-color: #bac5da;
  }

  .flex-center-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .check-transaction {
    width: 132px;
    height: 20px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    text-decoration-line: underline;

    /* Chromatic / Pink */

    color: #ff469f;
    margin-top: 12px;
  }

  .check-transaction:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .app-header {
      width: 327px;
      height: 52px;

      font-size: 24px;
      line-height: 32px;
    }

    .app-body {
      width: 327px;
      height: 616px;
    }

    .app-body-tokens-loot {
      width: 279px;
      height: 264px;
    }

    .loot-square {
      width: 200px;
      height: 200px;
      background: #2d9cdb;
    }

    .loot-square:hover {
      width: 205px;
      height: 205px;
    }

    .claim-btn {
      width: 196px;
    }

    .waiting-transaction {
      width: 279px;
  }
`;
