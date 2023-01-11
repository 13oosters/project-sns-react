import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles, mainTheme } from "./components/style/GlobalStyle";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);

reportWebVitals();
