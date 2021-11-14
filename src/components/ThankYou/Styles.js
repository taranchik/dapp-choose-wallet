import styled from "styled-components";

export const Styles = styled.div`
  & {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      margin-top: 40px;
      width: 655px;
      height: 64px;
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: #FFFFFF;
    }
  }

  .thank-you-green-box{
    margin-top: 90px;
    padding: 10px;
    width: 769px;
    height: 132px;
    background: #20925B;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 800px) {
    &{
      span{
        width: 311px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    
    .thank-you-green-box{
      width: 327px;
      font-size: 32px;
      line-height: 40px;
    }
`;
