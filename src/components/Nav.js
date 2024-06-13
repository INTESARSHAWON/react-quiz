import { Link } from "react-router-dom";
import Account from './Account';
import classes from '../styles/Nav.module.css';
import logo from '../../src/assets/images/logo-bg.png';

function Nav() {
    return(
        <nav className={classes.nav}>
        <ul>
            <li>
            <Link to ="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
                <h3>Learn with Sumit</h3>
            </Link>
            </li>
      </ul>
      <Account/>
    </nav>
    );
}

export default Nav;