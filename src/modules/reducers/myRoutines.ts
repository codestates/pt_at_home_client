import {SET_MY_ROUTINES, Routine, TypeSetMyRoutinesAction} from '../actions'

// State Type
interface MyRoutinesState {
    myRoutines:Array<Routine>
}

// Reducer
const initialState:MyRoutinesState = {
    myRoutines:[]
}

const myRoutinesReducer = (state=initialState, action:TypeSetMyRoutinesAction):MyRoutinesState => {
    switch(action.type) {
        case SET_MY_ROUTINES:
            return {...state, myRoutines:action.myRoutines}
        default:
            return state
    }
}

export default myRoutinesReducer;