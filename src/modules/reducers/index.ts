import { combineReducers } from 'redux';
import signReducer from './sign'
import userInfoReducer from './userInfo'
import workoutListReducer from './workoutList'
import myWorkoutsReducer from './myWorkouts'
import routineListReducer from './routineList'
import myRoutinesReducer from './myRoutines'

export default combineReducers({
    isLogin:signReducer,
    userInfo:userInfoReducer,
    workoutList:workoutListReducer,
    myWorkouts:myWorkoutsReducer,
    routineList:routineListReducer,
    myRoutines:myRoutinesReducer
})