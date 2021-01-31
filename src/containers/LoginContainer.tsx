import React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../components/Login'
import { UserInfo } from '../modules/reducers/userInfo'
import { actionSetUserInfo, actionLogin } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface LoginData {
  email: string;
  password: string;
}

interface SigninResponse {
  data: UserInfo;
  message: string;
}



export interface LoginProps {
  loginHandler(loginData: LoginData, type:string): void;
  kakaoLoginHandler():void;
  googleLoginHandler():void;
  githubLoginHandler():void;
}

const LoginContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()
    const redirectURI = 'http://localhost:3000'
    // const redirectURI = 'https://savemehomt.com'
    const KAKAO_CLIENT_ID = 'd50abf58bec9012f2e4c9691ebbfbc6e'
    const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${redirectURI}/dashboard`
    const GOOGLE_CLIENT_ID = '627663661717-8gh0906boel3ojvbsv45l0om88p3injo.apps.googleusercontent.com'
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&
    include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${redirectURI}/dashboard&client_id=${GOOGLE_CLIENT_ID}`
    const GITHUB_CLIENT_ID = 'b1675a244a579e33bfa0'
    const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectURI}/dashboard`

    // completed - dashboard 가 잘 동작하면 지워도 되는 코드임
    // useEffect(() => {
    //   if (isLogin.isLogin) {
    //     axios.get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {
    //       headers:{
    //       'Content-Type':'application/json',
    //       'Authorization':`Bearer ${accessToken}`
    //   }})
    //       .then(res => {
    //           if (res.data.message === 'ok') {
    //               dispatch(actionSetMyWorkouts(res.data.data))
    //           } 
    //       })
    //       axios.get<MyRoutinesResponse>(`${URI}/myroutine`, {
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':`Bearer ${accessToken}`
    //         }})
    //         .then(res => {
    //             if (res.data.message === 'ok') {
    //                 dispatch(actionSetMyRoutines(res.data.data))
    //             }
    //         })
    //   }
    // }, [isLogin.isLogin])
    
    // completed
    const loginHandler = (loginData:LoginData, type:string) => {
        return axios.post<SigninResponse>(`${URI}/users/signin`, loginData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'signin success') {
                    dispatch(actionLogin({isLogin:true, isExpired:false, type}))
                    dispatch(actionSetUserInfo(res.data.data))
                    history.push('/dashboard')
                }
            })
    }

    const githubLoginHandler = () => {
      window.location.assign(GITHUB_AUTH_URL)
    }

    const googleLoginHandler = () => {
      window.location.assign(GOOGLE_AUTH_URL)
    }

    const kakaoLoginHandler = () => {
      window.location.assign(KAKAO_AUTH_URL)
    }

    return (
        <>
            <Login 
              loginHandler={loginHandler}
              kakaoLoginHandler={kakaoLoginHandler}
              googleLoginHandler={googleLoginHandler}
              githubLoginHandler={githubLoginHandler}
            />
        </>
    );
};

export default LoginContainer;
