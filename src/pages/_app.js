import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import Theme from '../styles/theme'

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
