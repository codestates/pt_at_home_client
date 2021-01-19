import {SET_MY_WORKOUTS, Workout, TypeSetMyWorkoutsAction} from '../actions'

// State Type
interface MyWorkoutsState {
    myWorkouts:Array<Workout>
}

// Reducer
const initialState:MyWorkoutsState = {
    myWorkouts:[]
}

const myWorkoutsReducer = (state=initialState, action:TypeSetMyWorkoutsAction):MyWorkoutsState => {
    switch(action.type) {
        case SET_MY_WORKOUTS:
            return {...state, myWorkouts:action.myWorkouts}
        default:
            return state
    }
}

export default myWorkoutsReducer;