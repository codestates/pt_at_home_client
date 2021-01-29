const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SET_TYPE = 'SET_TYPE'
export const TOKEN_EXPIRED = 'EXPIRED'

export interface ActionIsLogin {
    type:string,
    payload:IsLogin;
} 

interface ActionIsExpired {
    type:string,
    payload:IsExpired
}

interface ActionType {
    type:string;
    payload:SetType;
}

interface SetType {
    type:string
}

interface IsExpired {
    isExpired:boolean;
}


export interface IsLogin {
    isLogin:boolean;
    isExpired?:boolean;
    type:string;
}

export const actionLogin = (payload:IsLogin):ActionIsLogin => ({
    type:LOGIN,
    payload
})

export const actionLogout = (payload:IsLogin):ActionIsLogin => ({
    type:LOGOUT,
    payload
})

export const actionExpired = (payload:IsExpired):ActionIsExpired => ({
    type:TOKEN_EXPIRED,
    payload
})

export const actionSetLoginType = (payload:SetType):ActionType => ({
    type:SET_TYPE,
    payload
})

const initialState:IsLogin = {
    isLogin:false,
    isExpired:false,
    type:'guest'
}

const isLogin = (state=initialState, action:ActionIsLogin):IsLogin => {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, action.payload)
        case LOGOUT:
            return Object.assign({}, state, action.payload)
        case TOKEN_EXPIRED:
            return Object.assign({}, state, action.payload)
        case SET_TYPE:
            return Object.assign({}, state, action.payload) 
        default:
            return state;
    }
}

export default isLogin;