import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import Theme from '../styles/theme'
import Cursor from '../styles/cursor'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Three.js Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Cursor />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
