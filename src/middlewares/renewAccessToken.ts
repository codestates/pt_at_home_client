import { MiddlewareAPI, Dispatch, Middleware, Action } from 'redux'
import { actionRenewToken } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true;

// interface MiddlewareTodoParams<S> {
//     store: MiddlewareAPI<S>;
//     next: Dispatch<S>;
//     action: Action<S>;
//   }

const renewAccessToken:Middleware = ({getState, dispatch}:MiddlewareAPI) => (next:Dispatch) => (action:Action) => {
    const token = getState().userInfo.auth.token
    // const expDate = store.getState().userInfo.auth.expDate
        axios.get(`${URI}/users/token`, {headers:{
            'Content-Type':'application/json', 
            'Authorization':`Bearer ${token}`
        }})
            .then(res => {
                if (res.data.message === 'accessToken verified') {
                    console.log(action, token)
                    const result = next(action)
                    return result
                }
            })

        console.log(action, token)
        const result = next(action)
        return result

}

export default renewAccessToken;