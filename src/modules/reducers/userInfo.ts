const SET_USER_INFO = 'SET_USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export interface UserInfo {
    id?:number;
    userName: string;
    email: string;
    token?: string;
}

export interface ActionUserInfo {
    type: string;
    payload:UserInfo
}

const initialState:UserInfo = {
    id:0,
    userName:'',
    email:'',
    token:''
}

// Action Creator - userInfo
export const actionSetUserInfo = (payload:UserInfo):ActionUserInfo => ({
    type:SET_USER_INFO,
    payload
})

export const actionUpdateUserInfo = (payload:UserInfo):ActionUserInfo => ({
    type:UPDATE_USER_INFO,
    payload
})

const userInfo = (state=initialState, action:ActionUserInfo):UserInfo => {
    switch(action.type) {
        case SET_USER_INFO:
            return action.payload
        case UPDATE_USER_INFO:
            return {...state,...action.payload}
        default:
            return state
    }
}

export default userInfo;