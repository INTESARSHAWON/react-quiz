import classes from '../styles/Form.module.css';

function Form({children, className, ...rest}) {
    return (
        <form className={`${className} ${classes.form}`} action="#" {...rest}>
            {children}
        </form>
    );
}

export default Form