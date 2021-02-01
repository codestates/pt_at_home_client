import { Dispatch } from 'redux'
import { URI } from '../../index'
import { actionLogout, actionExpired} from '../actions'
import { RootState } from './index'
import axios from 'axios'
axios.defaults.withCredentials = true;


const SET_USER_INFO = 'SET_USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const RENEW_ACCESS_TOKEN = 'RENEW_ACCESS_TOKEN'
const RESET_USER_INFO = 'RESET_USER_INFO'

export interface Auth {
    token:string;
    expDate:string;
}

export interface UserInfo {
    id?:number;
    userName: string;
    email: string;
    auth:Auth;
    createdAt?:string;
    updatedAt?:string;
}

export interface ActionUserInfo {
  type: string;
  payload: UserInfo;
}

export interface UserData {
    userName?:string;
    password?:string;
}

interface UpdateUserInfoResponse {
    data:UserInfo;
    message:string;
}

interface ResignResponse {
    message:string;
}

interface renewTokenType {
    token:string;
    expDate:string;
}

// interface ActionRenewToken {
//     type:string;
//     payload:renewTokenType
// }

interface ActionResetUserInfo {
    type:string;
}

// Action Creator - userInfo
// completed
export const actionSetUserInfo = (payload:UserInfo):ActionUserInfo => ({
    type:SET_USER_INFO,
    payload
})

// completed
export const actionResetUserInfo = ():ActionResetUserInfo => ({
    type:RESET_USER_INFO
})

// completed
export const actionResignUserInfo = (email:string) => async (dispatch:Dispatch, getState:()=>RootState) => {
    let { token, expDate } = getState().userInfo.auth
    let isTokenValid = await actionRenewToken(token, expDate, dispatch)
    if (isTokenValid) {
        token = getState().userInfo.auth.token
        axios.post<ResignResponse>(
            `${URI}/users/resign`,
            {email},
            {headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }}
        ).then (res => {
            if (res.data.message === 'resign success') {
                dispatch(actionLogout({isLogin:false, isExpired:false, type:'guest'}))
                dispatch(actionResetUserInfo())
            }
        })
    }
    }


// completed
export const actionUpdateUserInfo = (payload:UserData) => async (dispatch:Dispatch, getState:()=>RootState) => {
    let { token, expDate } = getState().userInfo.auth
    let isTokenValid = await actionRenewToken(token, expDate, dispatch)
    if (isTokenValid) {
        token = getState().userInfo.auth.token
        axios.post<UpdateUserInfoResponse>(
            `${URI}/users/update`, 
            payload, 
            {headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }})
            .then(res => {
                if (res.data.message === 'update success') {
                    dispatch({type:UPDATE_USER_INFO, payload:res.data.data})
                }
            })
    } 
}

// completed
export const actionRenewToken = (accessToken:string, expDate:string, dispatch:Dispatch) => {
    let hasExpired = checkExpired(accessToken, expDate)

    if (hasExpired) {
        return axios.get(`${URI}/users/token`, 
        {headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${accessToken}`
        }})
        .then(res => {
            if (res.data.message === 'accessToken verified') {
                dispatch({type:RENEW_ACCESS_TOKEN, payload:res.data.data})
                dispatch(actionExpired({isExpired:false}))
                return true
            } else {
                dispatch(actionExpired({isExpired:true}))
                return false
            }
        })
    } 
    else {
        return new Promise((resolve, reject) => resolve(true))
    }
}

// completed
const checkExpired = (token:string, date:string):boolean => {
    let now = new Date()
    let issued = Date.parse(date)
    let exp = new Date(issued)

    if (now.getTime() - exp.getTime() > 500000) {
        return true
    } else return false
}

const initialState:UserInfo = {
    id:0,
    userName:'GUEST',
    email:'',
    auth:{
        token:'',
        expDate:''
    },
    createdAt:'',
    updatedAt:''
}


const userInfo = (state=initialState, action:ActionUserInfo):UserInfo => {
    switch(action.type) {
        case SET_USER_INFO:
            return Object.assign({}, state, action.payload)
        case UPDATE_USER_INFO:
            return Object.assign({}, state, action.payload)
        case RENEW_ACCESS_TOKEN:
            return Object.assign({}, state, action.payload)
        case RESET_USER_INFO:
            return initialState
        default:
            return state
    }
}

export default userInfo;
