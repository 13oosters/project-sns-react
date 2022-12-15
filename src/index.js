import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom@6";
import reset from "styled-reset";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const mainTheme = {
  primaryColor: "#C5985E",
  secondaryColor: "#EBC695",
  smallFontSize: "1rem",
  baseFontSize: "1.4rem",
  largeFontSize: "1.6rem",
  xLargeFontSize: "1.8rem",
  xxLargeFontSize: "2.4rem",
};

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
  html{
    font-size: 62.5%;
  }
  *{
      box-sizing: border-box;
      font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }
  button{
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  input {
    border: none;
  }
  input:focus {
    outline: 1px solid #c5985e;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, a{
    font-family: inherit;
  }
  .sr-only {
    position: absolute;
    width:1px;
    height:1px;
    border: 0;
    clip:rect(1px,1px,1px,1px);
    overflow: hidden;
    z-index: -1;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
