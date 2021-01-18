import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    overflow-x: hidden;
  }
  body{
    font-size: 14px;
    color: #262626;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, textarea, button {
    background-color: transparent;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;