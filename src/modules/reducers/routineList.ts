import {SET_ROUTINE_LIST, Routine, TypeSetRoutineListAction} from '../actions'

// State Type
interface RoutineListState {
    routineList:Array<Routine>
}

// Reducer
const initialState:RoutineListState = {
    routineList:[]
}

const routineListReducer = (state=initialState, action:TypeSetRoutineListAction):RoutineListState => {
    switch(action.type) {
        case SET_ROUTINE_LIST:
            return {...state, routineList:action.routineList}
        default:
            return state
    }
}

export default routineListReducer;