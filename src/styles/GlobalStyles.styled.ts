import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    font-family: Arial, sans-serif;
  }

  body {
    position: relative;
    display: flex;
    justify-content: center;
}

`;
