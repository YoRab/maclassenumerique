import { createMuiTheme } from '@material-ui/core/styles'

const appBarTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8B50B2',
      light: '#bd7ee5',
      dark: '#5b2382',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#50d132',
      light: '#89ff66',
      dark: '#009f00',
      contrastText: '#000000'
    }
  }
})

export default appBarTheme
