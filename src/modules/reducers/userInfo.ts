import {SET_USER_INFO, UserInfo, TypeUserInfoAction} from '../actions'

// State Type
interface UserInfoState {
    userInfo:UserInfo
}

// Reducer
const initialState:UserInfoState = {
    userInfo:{
        id:0,
        userName:'',
        email:'',
        token:''
    }
}

const userInfoReducer = (state=initialState, action:TypeUserInfoAction):UserInfoState => {
    switch(action.type) {
        case SET_USER_INFO:
            return {...state, userInfo:action.userInfo}
        default:
            return state
    }
}

export default userInfoReducer