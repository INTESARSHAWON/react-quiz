import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Button from './Button';
import Form from './Form';
import {Link, useNavigate} from 'react-router-dom';
import { useState} from 'react';
import {useAuth} from '../contexts/Auth.Context'

function SignupForm(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth();
    // const history = useHistory();
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        // do validation
        if(password !== confirmPassword){
            return setError("passwords dont match");
        }

        try{
            setError("");
            setLoading(true);
            await signup(email, password, userName);
            navigate("/");
        }
        catch (err){
            console.log(err);
            setLoading(false);
            setError("Failed to signup");
        }

    }

    return (
        <Form style={{height: '500px'}} onSubmit= {handleSubmit}>                        
            <TextInput 
                type="text" 
                placeholder="Enter name" 
                icon="person"
                required
                value={userName} 
                onChange={(e)=> setUserName(e.target.value)}
            />
            <TextInput 
                type="text" 
                placeholder="Enter email" 
                icon="alternate_email"
                required
                value= {email} 
                onChange={(e)=>setEmail(e.target.value)}
            />
            <TextInput 
                type="password" 
                placeholder="Enter password" 
                icon="lock"
                required
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
            />
            <TextInput 
                type="password" 
                placeholder="Confirm password" 
                icon="lock_clock"
                required
                value={confirmPassword} 
                onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <Checkbox 
                text="I agree to the Terms &amp; Conditions"
                required
                value={agree} 
                onChange={(e)=>setAgree(e.target.value)}
            />
            <Button disabled={loading} type="submit" > 
                <span> Submit now </span> 
            </Button>

            {error && <p className="error"> {error} </p>}

            <div className="info">
                  Already have an account? <Link to="login.html">Login</Link> instead.
            </div>

        </Form>
    );
}

export default SignupForm;