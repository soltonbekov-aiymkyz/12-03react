
import Person from "../Person/Person";
import classes from "./PersonList.module.css";
const PersonList = ({ persons }) => {
    return (
        <div className={classes.PersonList}>
            {persons.map(person => <Person {...person} />)}
        </div>
    );
}
export default PersonList;

