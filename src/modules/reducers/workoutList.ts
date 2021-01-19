const SET_WORKOUT_LIST = 'SET_WORKOUT_LIST'

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

export interface ActionWorkoutList {
    type:string;
    payload:Array<Workout>;
}

// Action Creator - workoutList
export const actionSetWorkoutList = (payload:Array<Workout>):ActionWorkoutList => ({
    type:SET_WORKOUT_LIST,
    payload
})

const initialState:Array<Workout> = []

const workoutList = (state=initialState, action:ActionWorkoutList):Array<Workout> => {
    switch(action.type) {
        case SET_WORKOUT_LIST:
            return action.payload
        default:
            return state
    }
}

export default workoutList;