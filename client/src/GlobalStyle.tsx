import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  * {
    box-sizing: border-box
  }
  
  /* Scrollbars */
  * {
    scrollbar-color: #d5d5d5 transparent;
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  *::-webkit-scrollbar:vertical {
    width: 4px;
  }

  *::-webkit-scrollbar-button:increment,*::-webkit-scrollbar-button {
    display: none;
  }

  *::-webkit-scrollbar:horizontal {
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    cursor: move;
    background-color: #d5d5d5;
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
