
import classes from "./person.module.css";
const Person = ({name, photo, role, wpm, commits}) => {
        return (
            <div className={classes.Person}>
                <div className={classes.divPhoto}><img src={photo} alt="Photo" className={classes.photo}></img></div>
                <div className={classes.name}>{name}</div>
                <div className={classes.role}>Role: {role}</div>
                <div className={classes.wpm}>{wpm} WPM</div>
                <div className={classes.commits}>{commits} commits</div>
            </div>
        )
}
export default Person;