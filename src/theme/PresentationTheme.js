import { createMuiTheme } from '@material-ui/core/styles'

const presentationTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000'
    },
    secondary: {
      main: '#50d132',
      light: '#89ff66',
      dark: '#009f00',
      contrastText: '#000000'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#eeeeee'
    }
  }
})

export default presentationTheme
