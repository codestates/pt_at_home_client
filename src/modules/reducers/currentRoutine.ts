import { WorkoutOfRoutine } from './routineList'
const SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE'
const RESET_CURRENT_ROUTINE = 'RESET_CURRENT_ROUTINE'

export interface CurrentRoutine {
    routineId?:number;
    title?:string;
    workout:Array<WorkoutOfRoutine>;
}

interface ActionSetCurrentRoutine {
    type:string;
    payload:CurrentRoutine;
}

interface ActionResetCurrentRoutine {
    type:String;
}

export const actionSetCurrentRoutine = (payload:CurrentRoutine):ActionSetCurrentRoutine => ({
    type:SET_CURRENT_ROUTINE,
    payload
})

export const actionResetCurrentRoutine = ():ActionResetCurrentRoutine => ({
    type:RESET_CURRENT_ROUTINE
})

const initialState:CurrentRoutine = {
    routineId:0,
    title: '',
    workout:[]
}


const currentRoutine = (state=initialState, action:ActionSetCurrentRoutine) => {
    switch (action.type) {
        case SET_CURRENT_ROUTINE:
            return {...state, ...action.payload}
        case RESET_CURRENT_ROUTINE:
            return initialState
        default:
            return state
    }
}

export default currentRoutine;
