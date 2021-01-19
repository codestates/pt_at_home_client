export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_WORKOUT_LIST = 'SET_WORKOUT_LIST'
export const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST'
export const SET_MY_ROUTINES = 'SET_MY_ROUTINES' 
export const SET_MY_WORKOUTS = 'SET_MY_WORKOUTS'


//Type - Sign
export interface TypeSignAction {
    type:string,
    isLogin:boolean
} 

// Action creator - Sign
export const actionSignup = (isLogin:boolean):TypeSignAction => ({
    type:SIGNUP,
    isLogin
})

export const actionLogin = (isLogin:boolean):TypeSignAction => ({
    type:LOGIN,
    isLogin
})

export const actionLogout = (isLogin:boolean):TypeSignAction => ({
    type:LOGOUT,
    isLogin
})

// Type - userInfo
export interface UserInfo {
    id:number;
    userName: string;
    email: string;
    token: string;
}

export interface TypeUserInfoAction {
    type: string;
    userInfo:UserInfo
}

// Action Creator - userInfo
export const actionSetUserInfo = (userInfo:UserInfo):TypeUserInfoAction => ({
    type:SET_USER_INFO,
    userInfo
})


// Type - workoutList
export interface Workout {
    id:number;
    title:string;
    desc:string;
    image:string[];
    set:number;
    count:number;
    breakTime: number;
    calrorie: number;
    tool: string;
}

export interface TypeSetWorkoutListAction {
    type:string;
    workoutList:Array<Workout>;
}

// Action Creator - workoutList
export const actionSetWorkoutList = (workoutList:Array<Workout>):TypeSetWorkoutListAction => ({
    type:SET_WORKOUT_LIST,
    workoutList
})

// Type - myWorkouts
export interface TypeSetMyWorkoutsAction {
    type:string;
    myWorkouts:Array<Workout>;
}

// Action Creator - myWorkouts
export const actionSetMyWorkouts = (myWorkouts:Array<Workout>):TypeSetMyWorkoutsAction => ({
    type:SET_MY_WORKOUTS,
    myWorkouts
})

// Type - routineList
export interface WorkoutOfRoutine {
    id:number;
    title:string;
    desc:string;
    image:string[];
    mySet:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    tool: string;
}

export interface Routine {
    routineId:number;
    title:string;
    workout:Array<WorkoutOfRoutine>;
}

export interface TypeSetRoutineListAction {
    type:string,
    routineList:Array<Routine>
}

// Action Creator - routineList
export const actionSetRoutineList = (routineList:Array<Routine>):TypeSetRoutineListAction => ({
    type:SET_ROUTINE_LIST,
    routineList
})

// Type - myRoutines
export interface TypeSetMyRoutinesAction {
    type:string,
    myRoutines:Array<Routine>
}

// Action Creator - myRoutines
export const actionSetMyRoutines = (myRoutines:Array<Routine>):TypeSetMyRoutinesAction => ({
    type:SET_MY_ROUTINES,
    myRoutines
})