import React from 'react';
import Header from '../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import {
  actionLogout,
  actionRenewToken,
  actionExpired,
  actionSetUserInfo,
  actionSetMyRoutines,
  actionSetMyWorkouts
} from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface LogoutResponse {
  message: string;
}

enum TitleConstants {
  Dashboard = 'DASHBOARD',
  CreateRoutine = 'CREATE ROUTINE',
  UsersRoutine = 'MY ROUTINES',
  RunRoutine = 'RUN ROUTINE',
  Mypage = 'MY PAGE',
}

export interface HeaderProps {
  isLogin: boolean;
  userName: string;
  logoutHandler():void;
  title: string;
}

const HeaderContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state:RootState) => state.isLogin)
    const { userName, auth } = useSelector((state:RootState) => state.userInfo)
    const location = useLocation()

    const titleGenerator = ():string => {
        switch (location.pathname) {
          case '/dashboard':
            return TitleConstants.Dashboard;
          case '/createroutine':
            return TitleConstants.CreateRoutine;
          case '/usersroutine':
            return TitleConstants.UsersRoutine;
          case '/runroutine':
            return TitleConstants.RunRoutine;
          case '/mypage':
            return TitleConstants.Mypage;
          default:
            return '';
        }
      };

    const title = titleGenerator()

    const logoutHandler = async () => {
      let { token, expDate } = auth
      let isTokenValid = await actionRenewToken(token, expDate, dispatch)
      if (isTokenValid) {
        axios.get<LogoutResponse>(`${URI}/users/signout`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${auth.token}`
          }})
            .then(res => {
                console.log('logout', res)
                if (res.data.message === 'signout success') {
                    dispatch(actionLogout({isLogin:false, isExpired:false, type:'guest'}))
                    dispatch(actionSetUserInfo({id:0, userName:'', email:'', auth:{token:'', expDate:''}}))
                    dispatch(actionSetMyRoutines([]))
                    dispatch(actionSetMyWorkouts([]))
                }
            })
      } else {
        dispatch(actionExpired({isExpired:true}))
      }
    }
    
    return (
        <Header 
            isLogin={isLogin.isLogin}
            userName={userName}
            logoutHandler={logoutHandler}
            title={title}
        />
    );
};

export default HeaderContainer;
