import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleThemeChange = () => {
  console.log("parkour");
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App onChange={handleThemeChange} />
    </ThemeProvider>
  </React.StrictMode>
);
