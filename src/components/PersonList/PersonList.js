
import Person from "../Person/Person";
import classes from "./PersonList.module.css";

const PersonList = ({ persons, filterStudents, filterWPM, filterCommits }) => {
 // Dlinnyi
 let students = persons;
 if (filterStudents) {
   students = persons.filter(person => person.role == "Student");
 }

 
 );
}
export default PersonList;