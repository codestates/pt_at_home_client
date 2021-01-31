import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../components/Login'
import { UserInfo } from '../modules/reducers/userInfo'
import { MyWorkoutsResponse, MyRoutinesResponse} from '../containers/SideBarContainer'
import { RootState } from '../modules/reducers'
import { actionSetUserInfo, actionLogin, actionSetMyWorkouts, actionSetMyRoutines } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
import styled from 'styled-components';
axios.defaults.withCredentials = true

interface LoginData {
  email: string;
  password: string;
}

interface SigninResponse {
  data: UserInfo;
  message: string;
}

interface LoginContProps {
  prevPath:string
}

export interface LoginProps {
  loginHandler(loginData: LoginData, type:string): void;
}

const LoginContainer = ({prevPath}:LoginContProps):JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isLogin = useSelector((state:RootState) => state.isLogin)
    const accessToken = useSelector((state:RootState) => state.userInfo.auth.token)

    // completed
    useEffect(() => {
      if (isLogin.isLogin) {
        axios.get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {
          headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${accessToken}`
      }})
          .then(res => {
              if (res.data.message === 'ok') {
                  dispatch(actionSetMyWorkouts(res.data.data))
              } 
          })
          axios.get<MyRoutinesResponse>(`${URI}/myroutine`, {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${accessToken}`
            }})
            .then(res => {
                if (res.data.message === 'ok') {
                    dispatch(actionSetMyRoutines(res.data.data))
                }
            })
          
        
      }
    }, [isLogin.isLogin])
    
    // completed
    const loginHandler = (loginData:LoginData, type:string):void => {
        axios.post<SigninResponse>(`${URI}/users/signin`, loginData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log('login', res)
                if (res.data.message === 'signin success') {
                    dispatch(actionLogin({isLogin:true, isExpired:false, type}))
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
        <>
            <Login loginHandler={loginHandler}/>
        </>
    );
};

export default LoginContainer;
