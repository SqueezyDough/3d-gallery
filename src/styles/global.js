import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

const GlobalStyle = createGlobalStyle`
${fonts}

body {
  margin: 0;
  padding: ${({ theme }) => theme.spacings.sm};
  min-height: 100vh;
  background-color: black;
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
}

ul {
  padding: 0;
  list-style-type: none;
}

* {
  box-sizing: border-box;
  cursor: none;
}
`

export default GlobalStyle
