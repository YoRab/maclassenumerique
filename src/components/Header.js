import React from 'react'
import './Header.css'

import { AppBar, ThemeProvider, Toolbar } from '@material-ui/core'
import logoSmall from '../assets/logo_white_small.png'
import appBarTheme from '../theme/AppBarTheme'

function Header () {
  return (
        <header className="app-header">
            <ThemeProvider theme={appBarTheme}>
                <AppBar position="relative">
                    <Toolbar>
                        <a href="/">
                            <img src={logoSmall} className="app-logo" alt="Logo Ma classe numérique" />
                        </a>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </header>
  )
}

export default Header
