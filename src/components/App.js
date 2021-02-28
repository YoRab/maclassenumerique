import { CssBaseline, ThemeProvider } from '@material-ui/core'
import mainTheme from '../theme/MainTheme'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react'

function App () {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
