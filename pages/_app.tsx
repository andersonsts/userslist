import { ThemeProvider } from '@material-ui/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../lib/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <>
      <Head>
        <title>
          Users List
        </title>
        <meta 
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </> 
  ) 
}

export default MyApp
