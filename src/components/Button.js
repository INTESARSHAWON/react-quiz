import classes from '../styles/Button.module.css'

function Button({className, children}) {
    return(
        <div className={`${className} ${classes.button}`}>
            {children}
        </div>

    );
}

export default Button