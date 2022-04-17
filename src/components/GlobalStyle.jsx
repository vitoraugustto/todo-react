import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }


  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    min-width: 100%;
    height: auto;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input {
    border: 0;
  }

  select { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  input, textarea, button, select, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

export default GlobalStyle;
