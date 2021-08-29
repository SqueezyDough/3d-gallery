import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

const GlobalStyle = createGlobalStyle`
${fonts}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
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

canvas {
  position: relative;
  z-index: 0;
}
`

export default GlobalStyle
