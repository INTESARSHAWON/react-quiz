import classes from '../styles/Videos.module.css';
import Video from './Video';
import { Link } from "react-router-dom";


function Videos() {
    return(
        <div className={classes.videos}>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
        </div>
    );    
}

export default Videos 