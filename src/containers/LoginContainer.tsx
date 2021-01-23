import React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../components/Login'
import { actionSetUserInfo, actionLogin } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface LoginData {
    email:string;
    password:string;
}

interface UserInfo {
    id:number;
    userName:string;
    email:string;
    token:string;
}

interface SigninResponse {
    data:UserInfo;
    message:string
}

export interface LoginProps {
    loginHandler(loginData:LoginData):void;
}

const LoginContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()

    const loginHandler = (loginData:LoginData):void => {
        axios.post<SigninResponse>(`${URI}/users/signin`, loginData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'signin success') {
                    dispatch(actionLogin(true))
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
        <div>
            <Login loginHandler={loginHandler}/>
        </div>
    );
};

export default LoginContainer;