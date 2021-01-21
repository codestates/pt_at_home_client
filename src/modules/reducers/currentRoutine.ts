const SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE'

interface WorkoutOfRoutine {
    id:number;
    title:string;
    desc:string;
    image:string[];
    part:string[];
    mySet:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    tool: string;
}

interface CurrentRoutine {
    routineId?:number;
    title?:string;
    workout:Array<WorkoutOfRoutine>;
}

interface ActionCurrentRoutine {
    type:string;
    payload:CurrentRoutine;
}

export const actionSetCurrentRoutine = (payload:CurrentRoutine):ActionCurrentRoutine => ({
    type:SET_CURRENT_ROUTINE,
    payload
})

const initialState:CurrentRoutine = {
    // routineId:0,
    // title: 'fake data',
    workout:[]
}

const currentRoutine = (state=initialState, action:ActionCurrentRoutine) => {
    switch (action.type) {
        case SET_CURRENT_ROUTINE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default currentRoutine;