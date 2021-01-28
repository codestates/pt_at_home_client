import React from 'react';
import { useDispatch } from 'react-redux'
import { actionSetUserInfo, actionLogin } from '../modules/actions'
import { useHistory } from 'react-router-dom'
import { URI } from '../index'
import { UserInfo } from '../modules/reducers/userInfo'
import Signup from '../components/Signup'
import axios from 'axios'
axios.defaults.withCredentials = true

interface SignupData {
  userName: string;
  email: string;
  password: string;
}

interface SignupResponse {
  data: UserInfo;
  message: string;
}

export interface SignupProps {
  signupHandler(signupData: SignupData): void;
  kakaoLoginHandler():void;
  googleLoginHandler():void;
  githubLoginHandler():void;
}

const SignupContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()
    const redirectURI = 'http://localhost:3000'
    const KAKAO_CLIENT_ID = 'd50abf58bec9012f2e4c9691ebbfbc6e'
    const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${redirectURI}/dashboard`
    const GOOGLE_CLIENT_ID = ''
    const GOOGLE_AUTH_URL = ''
    const GITHUB_CLIENT_ID = 'b1675a244a579e33bfa0'
    const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectURI}/dashboard`

    const signupHandler = (signupData:SignupData):void => {
        axios.post<SignupResponse>(`${URI}/users/signup`, signupData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log('signup', res)
                if (res.data.message === 'signup success') {
                    dispatch(actionLogin({isLogin:true, isExpired:false}))
                    dispatch(actionSetUserInfo(res.data.data))
                    history.push('/dashboard')
                }
            })
    }

    const githubLoginHandler = () => {
      window.location.assign(GITHUB_AUTH_URL)
    }

    const googleLoginHandler = () => {
      // window.location.assign(GOOGLE_AUTH_URL)
    }

    const kakaoLoginHandler = () => {
      window.location.assign(KAKAO_AUTH_URL)
    }

    return (
        <Signup 
          signupHandler={signupHandler} 
          kakaoLoginHandler={kakaoLoginHandler}
          googleLoginHandler={googleLoginHandler}
          githubLoginHandler={githubLoginHandler}
          />
    );
};

export default SignupContainer;
