import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import presentationTheme from '../theme/PresentationTheme'
import logoWhiteLarge from '../assets/logo_white_large.png'
import booksBlur from '../assets/books_blur.jpg'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  presentation: {
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    backgroundImage: 'url(' + booksBlur + ')',
    padding: theme.spacing(8, 0, 6)
  }
}))

function Presentation () {
  // CLASSNAMES

  const classes = useStyles()

  // RENDER
  return (
    <div className={classes.presentation}>
      <ThemeProvider theme={presentationTheme}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} align="center">
              <img
                width="256px"
                src={logoWhiteLarge}
                alt="logo Ma Classe Numérique"
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h4" color="textPrimary">
                Mon espace personnel de gestion de classe numérique
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Presentation
