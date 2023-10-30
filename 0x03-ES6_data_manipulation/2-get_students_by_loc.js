import getListStudents from './0-get_list_students.js';

export default function getStudentIdsSum(getListStudents, city) {
  const result = getListStudents.filter((record) => {
    return record.city === city;
  });
  return result;
}
