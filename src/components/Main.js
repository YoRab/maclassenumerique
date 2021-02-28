import {
  Button,
  Container,
  IconButton,
  makeStyles,
  Snackbar,
  Typography
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import students from '../fixtures/students'
import Presentation from './Presentation'
import StudentsList from './StudentsList'
import ConfirmationDialog from './dialogs/ConfirmationDialog'
import StudentFormDialog from './dialogs/StudentFormDialog'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 0, 4)
  },
  addButton: {
    display: 'flex',
    margin: theme.spacing(4, 'auto', 2)

  }
}))

function Main () {
  // HOOKS

  const [studentsData, setStudentsData] = React.useState(students)
  const [snackBarInfo, setSnackBarInfo] = React.useState({
    open: false,
    message: ''
  })
  const [removeStudentDialogData, setRemoveStudentDialogData] = React.useState({
    open: false,
    studentID: null
  })
  const [editStudentDialogData, setEditStudentDialogData] = React.useState({
    open: false,
    student: null
  })

  // CLASSNAMES

  const classes = useStyles()

  // EVENT HANDLER

  const handleRemoveStudentDialogClose = (confirmationResult, studentID) => {
    if (confirmationResult) {
      setStudentsData(
        studentsData.filter((studentItem) => studentItem.id !== studentID)
      )
      setSnackBarInfo({ open: true, message: 'Elève supprimé' })
    }
    setRemoveStudentDialogData({ open: false, studentID: null })
  }

  const handleEditStudentDialogClose = (confirmationResult, student) => {
    if (confirmationResult) {
      if (student.id === null) { // New Student
        setStudentsData((studentsData) => [
          ...studentsData,
          {
            id: uuidv4(),
            firstName: student.firstName,
            lastName: student.lastName,
            gender: student.gender,
            age: student.age,
            grade: student.grade
          }
        ])
        setSnackBarInfo({ open: true, message: 'Elève ajouté' })
      } else { // Updated student
        setStudentsData(
          studentsData.map((studentItem) => {
            if (studentItem.id === student.id) {
              studentItem = student
            }
            return studentItem
          })
        )
        setSnackBarInfo({
          open: true,
          message: 'Modification prise en compte'
        })
      }
    }
    setEditStudentDialogData({ open: false, student: null })
  }

  const handleEditStudent = (studentID) => {
    setEditStudentDialogData({
      open: true,
      student: studentsData.find((student) => student.id === studentID) || {}
    })
  }

  const handleRemoveStudent = (studentID) => {
    setRemoveStudentDialogData({ open: true, studentID: studentID })
  }

  const handleAddStudent = (newStudentData) => {
    setEditStudentDialogData({
      open: true,
      student: {
        id: null,
        gender: 'f',
        lastName: '',
        firstName: '',
        age: 10,
        grade: 10
      }
    })
  }

  const handleSnackBarInfoClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackBarInfo({ open: false, message: '' })
  }

  // RENDER

  return (
    <main>
      <Presentation />
      <Container maxWidth="md" className={classes.container}>
        <Typography
          component="h5"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          La liste complète de vos élèves est affichée ici.
        </Typography>
        <Typography
          component="h5"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Vous pouvez à loisir en ajouter d&apos;autres, ou encore modifier ou
          supprimer ceux existant.
        </Typography>
        <Button
        align="center"
        variant="outlined"
        color="primary"
        className={classes.addButton}
        startIcon={<AddIcon />}
        onClick={handleAddStudent}
      >
        Ajouter un élève
      </Button>
      </Container>

      <Container maxWidth="md">
        <StudentsList
          students={studentsData}
          onEditStudent={handleEditStudent}
          onRemoveStudent={handleRemoveStudent}
        />
      </Container>
      {/* The way used below to open dialogs and snackbar works but there should be a cleaner way */}
      {removeStudentDialogData.open && (
        <ConfirmationDialog
          title="Voulez-vous vraiment supprimer cet élève ?"
          description="Toute suppression est définitive (sauf si vous rechargez la page évidemment)"
          studentID={removeStudentDialogData.studentID}
          onClose={handleRemoveStudentDialogClose}
        />
      )}
      {editStudentDialogData.open && (
        <StudentFormDialog
          title="Ajout / modification des informations d'un élève"
          description="Tous les champs sont requis"
          student={editStudentDialogData.student}
          onClose={handleEditStudentDialogClose}
        />
      )}
      {snackBarInfo.open && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={true}
          autoHideDuration={4000}
          onClose={handleSnackBarInfoClose}
          message={snackBarInfo.message}
          action={
            <React.Fragment>
              <Button
                color="secondary"
                size="small"
                onClick={handleSnackBarInfoClose}
              >
                FERMER
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackBarInfoClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      )}
    </main>
  )
}

export default Main
