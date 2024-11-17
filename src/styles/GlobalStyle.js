import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
  body {
    font-family: Arial, sans-serif;
    margin-top: 4.5em;
  }
  .body-MainScreen {
    background-color: #f1e0c7;
  }
  .body-Map {
    background-color: #f0f0f0;
  }
  .body-ClickerGame {
    background-color: rgb(230, 196, 235);
  }
  .body-BakingClass {
    background-color: rgb(218, 238, 186);
  }
  .body-NotFound {
    background-color: rgb(212, 243, 155);
  }
`;

export const DIV = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 45px;
`;