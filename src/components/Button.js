import classes from '../styles/Button.module.css'

function Button({className, children}) {
    return(
        <button className={`${className} ${classes.button}`}>
            {children}
        </button>

    );
}

export default Button