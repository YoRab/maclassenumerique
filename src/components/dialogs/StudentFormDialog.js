import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

function StudentFormDialog (props) {
  // PROPS

  const { title, description, student, onClose } = props

  // HOOKS

  const [studentData, setStudentData] = React.useState(student)

  // EVENT HANDLER

  const handleCancel = (event) => {
    onClose(false, studentData)
  }

  const handleChange = (event) => {
    const target = event.target
    let value = target.value
    const name = target.name

    // First and last names should start with uppercase
    if (name === 'firstName' || name === 'lastName') {
      if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
    }

    setStudentData(studentData => ({
      ...studentData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // the form validation is quick and dirty :)
    if (
      studentData.lastName.length > 0 &&
      studentData.firstName.length > 0 &&
      studentData.age !== '' &&
      !isNaN(studentData.age) &&
      studentData.age >= 1 &&
      studentData.age <= 99 &&
      (studentData.gender === 'm' || studentData.gender === 'f') &&
      studentData.grade !== '' &&
      !isNaN(studentData.grade) &&
      studentData.grade >= 0 &&
      studentData.grade <= 20
    ) {
      onClose(true, studentData)
    }
  }

  // REACT ELEMENTS

  return (
    <Dialog
      open={true}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <TextField
            error={studentData.lastName.length === 0}
            autoFocus
            required
            variant="outlined"
            margin="dense"
            id="lastName"
            name="lastName"
            label="Nom de famille"
            type="text"
            fullWidth
            value={studentData.lastName} onChange={handleChange}
          />
          <TextField
            required
            error={studentData.firstName.length === 0}
            variant="outlined"
            margin="dense"
            id="firstName"
            name="firstName"
            label="Prénom"
            type="text"
            fullWidth
            value={studentData.firstName} onChange={handleChange}
          />
          <TextField
            required
            InputProps={{ inputProps: { min: 1, max: 99 } }}
            error={studentData.age === '' || studentData.age < 1 || studentData.age > 99}
            variant="outlined"
            margin="dense"
            id="age"
            name="age"
            type="number"
            label="Age (ans)"
            value={studentData.age} onChange={handleChange}
            fullWidth
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Genre</FormLabel>
            <RadioGroup aria-label="gender" name="gender" row
              value={studentData.gender} onChange={handleChange}>
              <FormControlLabel value="f" control={<Radio />} label="Femme" />
              <FormControlLabel value="m" control={<Radio />} label="Homme" />
            </RadioGroup>
          </FormControl>

          <TextField
            required
            InputProps={{ inputProps: { min: 0, max: 20 } }}
            error={studentData.grade === '' || studentData.grade < 0 || studentData.grade > 20}
            variant="outlined"
            margin="dense"
            id="grade"
            name="grade"
            label="Moyenne générale"
            type="number"
            value={studentData.grade} onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            Annuler
          </Button>
          <Button type="submit" color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

StudentFormDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  student: PropTypes.object,
  onClose: PropTypes.func
}

export default StudentFormDialog
