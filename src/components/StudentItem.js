import { IconButton, TableCell, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import PropTypes from 'prop-types'
import './StudentItem.css'

// this function is outside the component as it is stateless and doesn't use props

const genderToString = (gender) => {
  return gender === 'm' ? 'Homme' : 'Femme'
}

function StudentItem (props) {
  // PROPS

  const { student, onRemoveStudent, onEditStudent } = props

  // EVENT HANDLER

  const handleClickRemoveStudent = (studentID) => (event) => {
    onRemoveStudent(studentID)
  }

  const handleClickEditStudent = (studentID) => (event) => {
    onEditStudent(studentID)
  }

  // RENDER

  return (
    <TableRow key={student.id}>
      <TableCell align="left">
        {student.lastName}
      </TableCell>
      <TableCell align="left">{student.firstName}</TableCell>
      <TableCell align="right">{student.age} ans</TableCell>
      <TableCell align="left">{genderToString(student.gender)}</TableCell>
      <TableCell align="right" className={student.grade < 10 ? 'bad-grade' : 'good-grade'}>{student.grade}</TableCell>
      <TableCell align="right" className="actions">
        <IconButton
          aria-label="edit"
          className="actions-edit"
          onClick={handleClickEditStudent(student.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className="actions-delete"
          onClick={handleClickRemoveStudent(student.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

StudentItem.propTypes = {
  student: PropTypes.object,
  onEditStudent: PropTypes.func,
  onRemoveStudent: PropTypes.func
}

export default StudentItem
