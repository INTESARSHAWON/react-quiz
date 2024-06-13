import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Login.module.css';
import TextInput from '../TextInput';
import Button from '../Button';

function Login () {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration/>
                <Form className={
                    `${classes.login}`}>                        
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="Enter password" icon="lock"/>
                    <Button> Submit now </Button>
                    <div className="info">
                          Don't have an account? <a href="login.html">Signup</a> instead.
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Login