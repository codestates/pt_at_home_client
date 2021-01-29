import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { LoginProps } from '../containers/LoginContainer'


const Login = ({loginHandler}:LoginProps):JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'email') setEmail(e.target.value)
        else if (e.target.name === 'password') setPassword(e.target.value)
    }

    return (
        <>
            <div>
                <input type="email" placeholder='Email' name='email' value={email} onChange={handleChange}/>
                <input type="password" placeholder='password' name='password' value={password} onChange={handleChange}/>
                <input type="button" value="Login" onClick={() => loginHandler({email, password}, 'savemehomt')}/>
            </div>
            <Link to={'/signup'}>Sign Up</Link>
            <div>Github Login</div>
            <div>Google Login</div>
        </>
    );
};

export default Login;