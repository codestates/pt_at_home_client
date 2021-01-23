import React, { useState } from 'react';
import { SignupProps } from '../containers/SignupContainer'

const Signup = ({signupHandler}:SignupProps):JSX.Element => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPW, setConfirmPW] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'email') setEmail(e.target.value)
        else if (e.target.name === 'userName') setUserName(e.target.value)
        else if (e.target.name === 'password') setPassword(e.target.value)
        else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value)
    }

    return (
        <>
            <div>
                <input type="email" name='email' placeholder='Email' value={email} onChange={handleChange}/>
                <input type="text" name='userName' placeholder='User Name' value={userName} onChange={handleChange}/>
                <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange}/>
                <input type="password" name='confirmPW' placeholder='Confirm Password' value={confirmPW} onChange={handleChange}/>
                <input type="button" value='Signup'/>
            </div>
            <div>Github Login</div>
            <div>Google Login</div>
        </>
    );
};

export default Signup;