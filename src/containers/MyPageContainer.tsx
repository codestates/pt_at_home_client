import React from 'react'
import { MyPage } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { UserInfo } from '../modules/reducers/userInfo'
import { actionUpdateUserInfo } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true;

export interface UserData {
    userName?:string;
    password?:string;
}

export interface UpdateUserInfoResponse {
    data:UserInfo;
    message:string;
}

export interface MyPageProps {
    userInfo:UserInfo;
    updateUserInfo(userData:UserData):void
}

const MyPageContainer = ():JSX.Element  => {
    const userInfo:UserInfo = useSelector((state:RootState) => state.userInfo)
    const isLogin:boolean = useSelector((state:RootState) => state.isLogin)
    const dispatch = useDispatch()

    
    const updateUserInfo = (userData:UserData):void => {
        axios.post<UpdateUserInfoResponse>(`${URI}/users/update`, userData, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if ( res.data.message === 'update success') {
                    dispatch(actionUpdateUserInfo(res.data.data))
                }
            })
    }

    return (
        <MyPage userInfo={userInfo} updateUserInfo={updateUserInfo} />
    )
}

export default MyPageContainer;