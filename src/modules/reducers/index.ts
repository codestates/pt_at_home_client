import { combineReducers } from 'redux';
import isLogin from './isLogin'
import userInfo from './userInfo'
import workoutList from './workoutList'
import myWorkouts from './myWorkouts'
import routineList from './routineList'
import myRoutines from './myRoutines'

export default combineReducers({
    isLogin,
    userInfo,
    workoutList,
    myWorkouts,
    routineList,
    myRoutines
})