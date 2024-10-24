import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body{
    box-sizing: inherit;
    font-family: sans-serif;
  }
`;
