import { Workout } from './workoutList'

const SET_MY_WORKOUTS = 'SET_MY_WORKOUTS';

export interface ActionMyWorkouts {
  type: string;
  payload: Array<Workout>;
}

// Action Creator - myWorkouts
export const actionSetMyWorkouts = (payload: Array<Workout>): ActionMyWorkouts => {
  payload = payload.map(el => Object.assign({}, el, {mySetCount:el.setCount, myCount:el.count, myBreakTime:el.breakTime}))
  return {
    type: SET_MY_WORKOUTS,
    payload,
  } 
};

const initialState: Array<Workout> = [];

const myWorkouts = (state = initialState,action: ActionMyWorkouts):Array<Workout> => {
  switch (action.type) {
    case SET_MY_WORKOUTS:
      return action.payload;
    default:
      return state;
  }
};

// const myWorkouts = (state = initialState, action:ActionMyWorkouts):Array<Workout> => {
//   if (action.type === SET_MY_WORKOUTS) {
//     console.log(action.payload)
//     return action.payload
//   } else {
//     return state
//   }
// }


export default myWorkouts;
