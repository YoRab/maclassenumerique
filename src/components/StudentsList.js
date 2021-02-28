import {
  Chip,
  Hidden,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'
import React, { useEffect } from 'react'
import StudentItem from './StudentItem'
import PropTypes from 'prop-types'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'
import './StudentsList.css'
import { getComparator, stableSort } from '../utils/array'

// this variable is outside the component as it is stateless and doesn't use props

const headCellsData = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Nom'
  },
  { id: 'firstName', numeric: false, disablePadding: false, label: 'Prénom' },
  { id: 'age', numeric: true, disablePadding: false, label: 'Age' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Genre' },
  {
    id: 'grade',
    numeric: true,
    disablePadding: false,
    label: 'Moyenne générale'
  }
]

function StudentsList (props) {
  // PROPS

  const { students, onEditStudent, onRemoveStudent } = props

  // HOOKS

  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('lastName')
  const [tableRatio, setTableRatio] = React.useState('auto')

  // the array mut be sorted after every update of the datasource
  useEffect(() => {
    setOrder(order)
    setOrderBy(orderBy)
  }, [order, orderBy])

  // EVENT HANDLER

  const handleRequestSort = (property) => (event) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleRemoveStudent = (studentID) => {
    onRemoveStudent(studentID)
  }

  const handleEditStudent = (studentID) => {
    onEditStudent(studentID)
  }

  const handleSwitchTableSize = (event) => {
    setTableRatio(tableRatio => tableRatio === 'auto' ? 'fixed' : 'auto')
  }

  // REACT ELEMENTS

  const studentItems = stableSort(
    students,
    getComparator(order, orderBy)
  ).map((student) => (
    <StudentItem
      key={student.id}
      student={student}
      onRemoveStudent={handleRemoveStudent}
      onEditStudent={handleEditStudent}
    />
  ))

  const sortableHeadCells = headCellsData.map((headCell) => (
    <TableCell
      key={headCell.id}
      align={headCell.numeric ? 'right' : 'left'}
      padding={headCell.disablePadding ? 'none' : 'default'}
      sortDirection={orderBy === headCell.id ? order : false}
    >
      <TableSortLabel
        active={orderBy === headCell.id}
        direction={orderBy === headCell.id ? order : 'asc'}
        onClick={handleRequestSort(headCell.id)}
      >
        {headCell.label}
      </TableSortLabel>
    </TableCell>
  ))

  // RENDER

  return (
    <>
    <Chip color="primary" className="count-chip" label={students.length + ' élèves au total'} />
    <Hidden mdUp> {/* this button is only usefull when using a smartphone or a small screen  */}
      <IconButton className="rightButton" color="primary" aria-label="switch aspect ratio" onClick={handleSwitchTableSize}>
        <AspectRatioIcon />
      </IconButton>
      </Hidden>
      <TableContainer>
        <Table aria-label="student table" className={tableRatio}>
          <TableHead>
            <TableRow>
              {sortableHeadCells}
              <TableCell align="right" padding="default">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{studentItems}</TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

StudentsList.propTypes = {
  students: PropTypes.array,
  onEditStudent: PropTypes.func,
  onRemoveStudent: PropTypes.func
}

export default StudentsList
