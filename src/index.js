import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppTheme from "./styles/AppTheme";
import App from "./App";
import GlobalStyle from "./styles/Global";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <React.StrictMode>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </CookiesProvider>
);
