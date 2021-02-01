const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST';

export interface WorkoutOfRoutine {
  id: number;
  title: string;
  instruction: string;
  image: string[];
  parts: string[];
  setCount?: number;
  count?: number;
  breakTime?: number;
  mySetCount: number;
  myCount: number;
  myBreakTime: number;
  calrorie: number;
  category: string;
  tool: string;
}

export interface Routine {
  routineId: number;
  title: string;
  workout: WorkoutOfRoutine[];
}

export interface ActionRoutineList {
  type: string;
  payload: Routine[];
}

// Action Creator - routineList
export const actionSetRoutineList = (
  payload: Routine[],
): ActionRoutineList => ({
  type: SET_ROUTINE_LIST,
  payload,
});

const initialState: Routine[] = [];

const routineList = (
  state = initialState,
  action: ActionRoutineList,
): Routine[] => {
  switch (action.type) {
    case SET_ROUTINE_LIST:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default routineList;
