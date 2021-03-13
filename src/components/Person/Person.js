import classes from "./Person.module.css";
const Person = ({ name, role, wpm, commits }) => {
    return (
        <div className={classes.Person}>
            <div className={classes.name}>{name}</div>
            <div className={classes.role}>{role}</div>
            <div className={classes.wpm}>{wpm}WPM</div>
            <div className={classes.commits}>{commits} commits</div>
        </div>
    );
}
export default Person;
