import React from 'react'
import { MyPage } from '../components/main'
import {useHistory} from 'react-router-dom'
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
    const history = useHistory()
    
    // completed
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

 
    // completed
    const resignHandler = (email:string) => {
        dispatch(actionResignUserInfo(email))
        history.push('/')
        // if (userName === userInfo.userName) {
        //     axios.post<ResignResponse>(`${URI}/users/resign`, {userName}, {headers:{'Content-Type':'application/json'}})
        //         .then(res => {
        //             console.log('resign', res)
        //             if (res.data.message === 'resign success') {
        //                 dispatch(actionLogout(false))
        //             }
        //         })
        // }
    }

    return (
        <MyPage isLogin={isLogin} userInfo={userInfo} updateUserInfo={updateUserInfo} resignHandler={resignHandler} />
    )
}

export default MyPageContainer;
