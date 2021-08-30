import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

const GlobalStyle = createGlobalStyle`
${fonts}

html, body {
  background-color: white;
}

body {
  margin: 0;
  padding: ${({ theme }) => theme.spacings.sm};
  min-height: 100vh;
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  overflow-x: hidden;

  @media only screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: 0;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.header};
  font-variant-ligatures: common-ligatures;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  cursor: none;
}

main {
  margin: 0 auto;
  max-width: ${({ theme }) => theme.screens.xl};
}

canvas {
  position: relative;
  z-index: 0;
}
`

export default GlobalStyle
