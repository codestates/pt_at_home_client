import React from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../components/Login'
import { UserInfo} from '../modules/reducers/userInfo'
import { actionSetUserInfo, actionLogin } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true
=======
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';
import { actionSetUserInfo, actionLogin } from '../modules/actions';
import { URI } from '../index';
import axios from 'axios';
axios.defaults.withCredentials = true;
>>>>>>> d394118832d84ea76fa283726f11bdbe4057f546

interface LoginData {
  email: string;
  password: string;
}

<<<<<<< HEAD
=======
interface UserInfo {
  id: number;
  userName: string;
  email: string;
  token: string;
}

>>>>>>> d394118832d84ea76fa283726f11bdbe4057f546
interface SigninResponse {
  data: UserInfo;
  message: string;
}

export interface LoginProps {
  loginHandler(loginData: LoginData): void;
}

<<<<<<< HEAD
const LoginContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory()

    // completed
    const loginHandler = (loginData:LoginData):void => {
        axios.post<SigninResponse>(`${URI}/users/signin`, loginData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log('login', res)
                if (res.data.message === 'signin success') {
                    dispatch(actionLogin({isLogin:true, isExpired:false}))
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
=======
const LoginContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = (loginData: LoginData): void => {
    axios
      .post<SigninResponse>(`${URI}/users/signin`, loginData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log('login', res);
        if (res.data.message === 'signin success') {
          dispatch(actionLogin(true));
          dispatch(actionSetUserInfo(res.data.data));
          history.goBack();
        }
      });
  };

  const githubLoginHandler = () => {};

  const googleLoginHandler = () => {};

  return (
    <div>
      <Login loginHandler={loginHandler} />
    </div>
  );
>>>>>>> d394118832d84ea76fa283726f11bdbe4057f546
};

export default LoginContainer;
