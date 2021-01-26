const SET_MY_ROUTINES = 'SET_MY_ROUTINES' 

interface WorkoutOfRoutine {
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

interface Routine {
    routineId:number;
    title:string;
    workout:Array<WorkoutOfRoutine>;
}

export interface ActionMyRoutines {
    type:string,
    payload:Array<Routine>
}

// Action Creator - routineList
export const actionSetMyRoutines = (payload:Array<Routine>):ActionMyRoutines => ({
    type:SET_MY_ROUTINES,
    payload
})


const initialState:Array<Routine> = []

const myRoutines = (state=initialState, action:ActionMyRoutines):Array<Routine> => {
    switch(action.type) {
        case SET_MY_ROUTINES:
            return action.payload
        default:
            return state
    }
}

export default myRoutines;