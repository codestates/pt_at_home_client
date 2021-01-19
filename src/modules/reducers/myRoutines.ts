const SET_MY_ROUTINES = 'SET_MY_ROUTINES' 
const ADD_MY_ROUTINES = 'ADD_MY_ROUTINES'

interface WorkoutOfRoutine {
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

interface Routine {
    routineId:number;
    title:string;
    workout:Array<WorkoutOfRoutine>;
}

export interface ActionMyRoutines {
    type:string,
    payload:Array<Routine> | Routine
}

// Action Creator - routineList
export const actionSetMyRoutines = (payload:Array<Routine>):ActionMyRoutines => ({
    type:SET_MY_ROUTINES,
    payload
})

export const actionAddMyRoutines = (payload:Routine):ActionMyRoutines => ({
    type:ADD_MY_ROUTINES,
    payload
})

const initialState:Array<Routine> = []

const myRoutines = (state=initialState, action:ActionMyRoutines):Array<Routine> => {
    switch(action.type) {
        case SET_MY_ROUTINES:
            return state.concat(action.payload)
        case ADD_MY_ROUTINES:
            return state.concat(action.payload)
        default:
            return state
    }
}

export default myRoutines;