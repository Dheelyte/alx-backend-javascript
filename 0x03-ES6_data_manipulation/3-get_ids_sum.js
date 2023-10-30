import getListStudents from './0-get_list_students.js';

export default function getStudentIdsSum(getListStudents, city) {
  getListStudents.map((record) => {
    return record.city === city;
  })
}
