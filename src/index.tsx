import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
// export let URI:string = 'http://localhost:8080'
export const URI:string = 'https://savemehomt.com'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html, body, #root {
    height: 100%;
    background-color: #e0e5ec;
  }
  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    font-family: 'Nanum Gothic', sans-serif;
    // @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&display=swap');
    // font-family: 'Nanum Myeongjo', serif;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
