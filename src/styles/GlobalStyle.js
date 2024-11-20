import { createGlobalStyle } from 'styled-components';
import CookieRunRegular from '../fonts/CookieRun-Regular.ttf';
import CookieRunBold from '../fonts/CookieRun-Bold.ttf';
import CookieRunBlack from '../fonts/CookieRun-Black.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'CookieRun-Regular';
        src: local('CookieRun-Regular'), local('CookieRun-Regular');
        font-style: normal;
        src: url(${CookieRunRegular}) format('ttf');
    }
    @font-face {
        font-family: 'CookieRun-Bold';
        src: local('CookieRun-Bold'), local('CookieRun-Bold');
        font-style: normal;
        src: url(${CookieRunBold}) format('ttf');
    }
    @font-face {
        font-family: 'CookieRun-Black';
        src: local('CookieRun-Black'), local('CookieRun-Black');
        font-style: normal;
        src: url(${CookieRunBlack}) format('ttf');
    }
`;

export default GlobalStyle;
