<<<<<<< HEAD
import React from 'react'
import { MyPage } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { UserInfo, UserData } from '../modules/reducers/userInfo'
import { actionUpdateUserInfo, actionResignUserInfo } from '../modules/actions'

export interface MyPageProps {
    isLogin:boolean;
    userInfo:UserInfo;
    updateUserInfo(userData:UserData):void;
    resignHandler(userName:string):void;
}

const MyPageContainer = ():JSX.Element  => {
    const userInfo:UserInfo = useSelector((state:RootState) => state.userInfo)
    const isLogin:boolean = useSelector((state:RootState) => state.isLogin.isLogin)
    const dispatch = useDispatch()

    
    const updateUserInfo = (userData:UserData) => {
        dispatch(actionUpdateUserInfo(userData))
        // axios.post<UpdateUserInfoResponse>(
        //     `${URI}/users/update`, 
        //     userData, 
        //     {headers:{
        //         'Content-Type':'application/json',
        //         'Authorization':`Bearer ${userInfo.auth.token}`
        //     }})
        //     .then(res => {
        //         if ( res.data.message === 'update success') {
        //             dispatch(actionUpdateUserInfo(res.data.data))
        //         } 
        //     })
    }

 

    const resignHandler = (email:string) => {
        dispatch(actionResignUserInfo(email))
        // if (userName === userInfo.userName) {
        //     axios.post<ResignResponse>(`${URI}/users/resign`, {userName}, {headers:{'Content-Type':'application/json'}})
        //         .then(res => {
        //             console.log('resign', res)
        //             if (res.data.message === 'resign success') {
        //                 dispatch(actionLogout(false))
        //             }
        //         })
        // }
=======
import React from 'react';
import { MyPage } from '../components/main';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import { UserInfo } from '../modules/reducers/userInfo';
import { actionUpdateUserInfo, actionLogout } from '../modules/actions';
import { URI } from '../index';
import axios from 'axios';
axios.defaults.withCredentials = true;

interface UserData {
  userName?: string;
  password?: string;
}

interface UpdateUserInfoResponse {
  data: UserInfo;
  message: string;
}

interface ResignResponse {
  message: string;
}

export interface MyPageProps {
  userInfo: UserInfo;
  updateUserInfo(userData: UserData): void;
  resignHandler(userName: string): void;
}

const MyPageContainer = (): JSX.Element => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo);
  const isLogin: boolean = useSelector((state: RootState) => state.isLogin);
  const dispatch = useDispatch();

  const updateUserInfo = (userData: UserData): void => {
    axios
      .post<UpdateUserInfoResponse>(`${URI}/users/update`, userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        if (res.data.message === 'update success') {
          dispatch(actionUpdateUserInfo(res.data.data));
        }
      });
  };

  const resignHandler = (userName: string): void => {
    if (userName === userInfo.userName) {
      axios
        .post<ResignResponse>(
          `${URI}/users/resign`,
          { userName },
          { headers: { 'Content-Type': 'application/json' } },
        )
        .then((res) => {
          console.log('resign', res);
          if (res.data.message === 'resign success') {
            dispatch(actionLogout(false));
          }
        });
>>>>>>> d394118832d84ea76fa283726f11bdbe4057f546
    }
  };

<<<<<<< HEAD
    return (
        <MyPage isLogin={isLogin} userInfo={userInfo} updateUserInfo={updateUserInfo} resignHandler={resignHandler} />
    )
}
=======
  return (
    <MyPage
      userInfo={userInfo}
      updateUserInfo={updateUserInfo}
      resignHandler={resignHandler}
    />
  );
};
>>>>>>> d394118832d84ea76fa283726f11bdbe4057f546

export default MyPageContainer;
