const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST';

export interface WorkoutOfRoutine {
    id:number;
    title:string;
    instruction:string;
    image:string[];
    parts:string[];
    setCount?:number;
    count?:number;
    breakTime?:number;
    mySetCount:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    category:string;
    tool: string;
}

export interface Routine {
  routineId: number;
  title: string;
  workout: Array<WorkoutOfRoutine>;
}

export interface ActionRoutineList {
  type: string;
  payload: Array<Routine>;
}

// Action Creator - routineList
export const actionSetRoutineList = (
  payload: Array<Routine>,
): ActionRoutineList => ({
  type: SET_ROUTINE_LIST,
  payload,
});

const initialState:Array<Routine> = []

const routineList = (
  state = initialState,
  action: ActionRoutineList,
): Array<Routine> => {
  switch (action.type) {
    case SET_ROUTINE_LIST:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default routineList;
