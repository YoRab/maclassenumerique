import { v4 as uuidv4 } from 'uuid'

const students = [
  { id: uuidv4(), firstName: 'Jean', lastName: 'Ginon', gender: 'm', age: 12, grade: 10 },
  { id: uuidv4(), firstName: 'Martin', lastName: 'Billoud', gender: 'm', age: 13, grade: 8.5 },
  { id: uuidv4(), firstName: 'Julia ', lastName: 'Lamare', gender: 'f', age: 12, grade: 17 },
  { id: uuidv4(), firstName: 'Constance', lastName: 'Daoust', gender: 'f', age: 11, grade: 12 },
  { id: uuidv4(), firstName: 'Laurence', lastName: 'Tougas', gender: 'm', age: 14, grade: 10 },
  { id: uuidv4(), firstName: 'Georges', lastName: 'Lamy', gender: 'm', age: 13, grade: 11.5 },
  { id: uuidv4(), firstName: 'Margaux', lastName: 'Arsenault', gender: 'f', age: 12, grade: 14.5 },
  { id: uuidv4(), firstName: 'Guillaume ', lastName: 'Devoe', gender: 'm', age: 13, grade: 7.2 },
  { id: uuidv4(), firstName: 'Yves ', lastName: 'Deniger', gender: 'm', age: 12, grade: 9.8 },
  { id: uuidv4(), firstName: 'Catherine', lastName: 'Artois', gender: 'f', age: 14, grade: 10.5 }
]

export default students
