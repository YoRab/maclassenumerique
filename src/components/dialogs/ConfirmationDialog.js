import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'

function ConfirmationDialog (props) {
  // PROPS

  const { title, description, studentID, onClose } = props

  // EVENT HANDLER

  const handleClose = (confirmationResult) => (event) => {
    onClose(confirmationResult, studentID)
  }

  // RENDER

  return (
      <Dialog
        open={true}
        onClose={handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose(false)}>
            Annuler
          </Button>
          <Button onClick={handleClose(true)} color="primary" autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
  )
}

ConfirmationDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  studentID: PropTypes.string,
  onClose: PropTypes.func
}

export default ConfirmationDialog
