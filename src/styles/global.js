import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: white;
    font-family: ${({ theme }) => theme.bodyFont};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.bodyFont};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    cursor: none;
  }

  canvas {
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
`

export default GlobalStyle
