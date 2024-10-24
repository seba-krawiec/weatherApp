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


:root {
    
        --color-orange500: "#D97A26",
        --color-orange400: "#B98B3F",
        --color-orange300: "#B9643F",
        --color-orange200: "#E8C48A",
       --color-blue500: "#111DFE",
        --color-blue400: "#264AD9",
        --color-blue300: "#3F4FB9",
        --color-blue200: "#9AA5C0",

        --shadow-black:
        -webkit-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1),
        -moz-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1),
        box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1);
    
}
`;
