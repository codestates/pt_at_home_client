import {SIGNUP, LOGIN, LOGOUT, TypeSignAction} from '../actions'

// State Type
interface IsLogin {
    isLogin:boolean
}

// Reducer
const initialState:IsLogin = {
    isLogin:false
}

const signReducer = (state=initialState, action:TypeSignAction):IsLogin => {
    switch(action.type) {
        case SIGNUP:
            return {...state, isLogin:action.isLogin}
        case LOGIN:
            return {...state, isLogin:action.isLogin}
        case LOGOUT:
            return {...state, isLogin:action.isLogin}
        default:
            return state;
    }
}

export default signReducer