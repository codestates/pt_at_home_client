const SIGNUP = 'SIGNUP'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export interface ActionIsLogin {
    type:string,
    payload:boolean;
} 

export const actionSignup = (payload:boolean):ActionIsLogin => ({
    type:SIGNUP,
    payload
})

export const actionLogin = (payload:boolean):ActionIsLogin => ({
    type:LOGIN,
    payload
})

export const actionLogout = (payload:boolean):ActionIsLogin => ({
    type:LOGOUT,
    payload
})

const initialState:boolean = false

const isLogin = (state=initialState, action:ActionIsLogin):boolean => {
    switch(action.type) {
        case SIGNUP:
            return action.payload
        case LOGIN:
            return action.payload
        case LOGOUT:
            return action.payload
        default:
            return state;
    }
}

export default isLogin;