import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import font1 from '../assets/fonts/CookieRun_Black.ttf';
import font2 from '../assets/fonts/CookieRun_Bold.ttf';
import font3 from '../assets/fonts/CookieRun_Regular.ttf';

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'OurFont1';
    src: url(${font1}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


@font-face {
    font-family: 'OurFont2';
    src: url(${font2}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


@font-face {
    font-family: 'OurFont3';
    src: url(${font3}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: Font1;
  }
  .body-MainScreen {
    background-color: #d1c3b6;
  }
  .body-Map {
    background-color: #f0f0f0;
    margin-top: 4.5em;
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

// export const DIV = styled.div`

//   background-color: #ffffff;

// `;