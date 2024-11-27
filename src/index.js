import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //div.루트 엘리먼트에 렌더링
  //<React.StrictMode>
  <>
    <GlobalStyle />
    <App />
  </>
  //</React.StrictMode>
);

reportWebVitals();
