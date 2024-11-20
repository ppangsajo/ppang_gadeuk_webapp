import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle.js';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //div.루트 엘리먼트에 렌더링
  <React.StrictMode>
<<<<<<< HEAD
=======

>>>>>>> 8c22a820b64d0cd31f5ae623c3f5aa23ff35e5d3
    <GlobalStyle />
    <App />

  </React.StrictMode>
);

reportWebVitals();
