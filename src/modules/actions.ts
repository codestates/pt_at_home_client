import { actionSignup, actionLogin, actionLogout, ActionIsLogin } from './reducers/isLogin'
import { actionSetUserInfo, actionUpdateUserInfo, UserInfo, ActionUserInfo } from './reducers/userInfo'
import { actionSetWorkoutList, Workout, ActionWorkoutList } from './reducers/workoutList'
import { actionSetMyWorkouts, actionAddMyWorkouts, ActionMyWorkouts } from './reducers/myWorkouts'
import { actionSetRoutineList, WorkoutOfRoutine, Routine, ActionRoutineList } from './reducers/routineList'
import { actionSetMyRoutines, actionAddMyRoutines, ActionMyRoutines } from './reducers/myRoutines'

export const actions = {
    actionSignup,
    actionLogin,
    actionLogout,
    actionSetUserInfo,
    actionUpdateUserInfo,
    actionSetWorkoutList,
    actionSetMyWorkouts,
    actionAddMyWorkouts,
    actionSetRoutineList,
    actionSetMyRoutines,
    actionAddMyRoutines
}
