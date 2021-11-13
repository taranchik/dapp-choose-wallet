import styled from "styled-components";

export const Styles = styled.div`
  & {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 40px 80px 0 0;
  }

  .menu-content {
    height: 56px;
    background: #0ffff1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 12px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
  }

  @media (max-width: 600px) {
    .menu-content {
      display: none;
    }
  }
`;
