import styled from "styled-components";

export const Styles = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }

  .app-header {
    height: 68px;
    width: 371px;
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

  .app-body-network {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 40px 20px;
  }

  .app-body-network-header {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #002299;
  }

  .app-body-network-header-description {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #161623;
  }

  .network-field {
    /* width: 450px; */
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #edf0f6;
    box-sizing: border-box;
    padding: 20px;
    margin-top: 20px;
  }

  .network-field:hover,
  .network-field-wallets:hover,
  .connect-btn:hover {
    cursor: pointer;
  }

  .network-field-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .network-field-title span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #002299;
  }

  .network-field-wallets {
    width: 100%;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    box-sizing: border-box;
    padding: 20px;
  }

  .connect-btn,
  .connect-btn:active,
  .connect-btn:focus {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 12px;

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
    border: none;
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

    .network-field-wallets {
      height: 92px;
    }

    .connect-btn {
      display: none;
    }
  }
`;
