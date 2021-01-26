const SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE'
const RESET_CURRENT_ROUTINE = 'RESET_CURRENT_ROUTINE'

export interface WorkoutOfRoutine {
    id:number;
    title:string;
    instruction:string;
    image:string[];
    part:string[];
    mySetCount:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    tool: string;
}

export interface CurrentRoutine {
    routineId:number;
    title:string;
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

// const initialState:CurrentRoutine = {
//     routineId:0,
//     title: 'fake data',
//     workout:[]
// }

const initialState:CurrentRoutine = {
    routineId:0,
    title:'fake data',
    workout:[{
        id:0,
        title:'fake workout',
        instruction:'adfasdfadsfasdf',
        image:['one', 'two', 'three'],
        part:['core', 'heap'],
        mySetCount:3,
        myCount:3,
        myBreakTime: 8,
        calrorie: 1000,
        tool: 'band'
    }, {
        id:1,
        title:'fake workout',
        instruction:'adfasdfadsfasdf',
        image:['three', 'four', 'five'],
        part:['core', 'heap'],
        mySetCount:3,
        myCount:10,
        myBreakTime: 8,
        calrorie: 1000,
        tool: 'band'
    }, {
        id:2,
        title:'fake workout',
        instruction:'adfasdfadsfasdf',
        image:['6', '7', '8', '9'],
        part:['core', 'heap'],
        mySetCount:3,
        myCount:4,
        myBreakTime: 8,
        calrorie: 1000,
        tool: 'band'
    }]
    
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
