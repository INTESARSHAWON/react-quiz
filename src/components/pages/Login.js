import LoginForm from '../LoginForm';
import Illustration from '../Illustration';
// import TextInput from '../TextInput';

function Login () {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration/>
                <LoginForm/>
            </div>
        </>
    );
}

export default Login