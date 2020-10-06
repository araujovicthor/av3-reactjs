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
    background: #262E2E;
  }

  body, button, input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
    border: 0;
  }

  table, th, td {
    border: 1px solid #fff;
  }

  h1, h2, h3, h4, h5, span, p {
    color: #fff;
  }
`;
