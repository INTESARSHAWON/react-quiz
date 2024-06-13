import Checkbox from './Checkbox';
import classes from '../styles/Answers.module.css'

function Answers () {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Test Answer 1"/>
            <Checkbox className={classes.answer} text="Test Answer 2"/>
            <Checkbox className={classes.answer} text="Test Answer 3"/>
            <Checkbox className={classes.answer} text="Test Answer 4"/>
            <Checkbox className={classes.answer} text="Test Answer 5"/>
        </div>
    );
}

export default Answers;