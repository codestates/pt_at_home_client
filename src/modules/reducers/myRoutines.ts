import { Routine } from './routineList'
const SET_MY_ROUTINES = 'SET_MY_ROUTINES';

export interface ActionMyRoutines {
  type: string;
  payload: Array<Routine>;
}

// Action Creator - routineList
export const actionSetMyRoutines = (
  payload: Array<Routine>,
): ActionMyRoutines => ({
  type: SET_MY_ROUTINES,
  payload,
});

const initialState: Array<Routine> = [];
// {
//   routineId:0,
//   title:'',
//   workout:[]
// }
const myRoutines = (
  state = initialState,
  action: ActionMyRoutines,
): Array<Routine> => {
  switch (action.type) {
    case SET_MY_ROUTINES:
      return action.payload;
    default:
      return state;
  }
};

export default myRoutines;
