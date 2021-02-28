import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6)
  }
}))

function Footer () {
  // CLASSNAMES

  const classes = useStyles()

  // RENDER

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Ma Classe Numérique
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Footer
