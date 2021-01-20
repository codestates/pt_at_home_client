import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actionSignup, actionSetUserInfo } from '../modules/actions'
import { URI } from '../index'
import Signup from '../components/Signup'
import axios from 'axios'
axios.defaults.withCredentials = true



interface SignupData {
    userName:string;
    email:string;
    password:string;
}

interface UserInfo {
    id:number;
    userName:string;
    email:string;
    token:string;
}

interface SignupResponse {
    data:UserInfo;
    message:string
}

export interface SignupProps {
    signupHandler(signupData:SignupData):void
}


const SignupContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()

    const signupHandler = (signupData:SignupData):void => {
        axios.post<SignupResponse>(`${URI}/users/signup`, signupData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'signup success') {
                    dispatch(actionSignup(true))
                    dispatch(actionSetUserInfo(res.data.data))
                    history.goBack()
                }
            })
    }

    const githubLoginHandler = () => {

    }

    const googleLoginHandler = () => {

    }

    return (
        <Signup signupHandler={signupHandler}/>
    );
};

export default SignupContainer;