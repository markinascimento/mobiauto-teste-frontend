import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #222222;
    background-color: #F1F1F1;
    -webkit-font-smoothing: antialiased;
  }
`;
