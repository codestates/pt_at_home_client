const SET_MY_WORKOUTS = 'SET_MY_WORKOUTS'
const ADD_MY_WORKOUTS = 'ADD_MY_WORKOUTS'

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

export interface ActionMyWorkouts {
    type:string;
    payload: Workout | Array<Workout>
}

// Action Creator - myWorkouts
export const actionSetMyWorkouts = (payload:Array<Workout>):ActionMyWorkouts => ({
    type:SET_MY_WORKOUTS,
    payload
})

export const actionAddMyWorkouts = (payload:Workout):ActionMyWorkouts => ({
    type:SET_MY_WORKOUTS,
    payload
})

const initialState:Array<Workout> = []

const myWorkouts = (state=initialState, action:ActionMyWorkouts):Array<Workout> => {
    switch(action.type) {
        case SET_MY_WORKOUTS:
            return state.concat(action.payload)
        case ADD_MY_WORKOUTS:
            return state.concat(action.payload)
        default:
            return state
    }
}

export default myWorkouts;