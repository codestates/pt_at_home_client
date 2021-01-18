import {SET_WORKOUT_LIST, Workout, TypeSetWorkoutListAction} from '../actions'

// State Type
interface WorkoutListState {
    workoutList:Array<Workout>
}

// Reducer
const initialState:WorkoutListState = {
    workoutList:[]
}

const workoutListReducer = (state=initialState, action:TypeSetWorkoutListAction):WorkoutListState => {
    switch(action.type) {
        case SET_WORKOUT_LIST:
            return {...state, workoutList:action.workoutList}
        default:
            return state
    }
}

export default workoutListReducer;