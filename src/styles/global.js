import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #fff;
  }

  body, button, input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: #333;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
    border: 0;
  }
`;
