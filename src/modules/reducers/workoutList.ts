import axios from 'axios';
axios.defaults.withCredentials = true;

const SET_WORKOUT_LIST = 'SET_WORKOUT_LIST';

export interface Workout {
  id: number;
  title: string;
  instruction: string;
  image: string[];
  parts: string[];
  setCount: number;
  count: number;
  breakTime: number;
  mySetCount: number;
  myCount: number;
  myBreakTime: number;
  calrorie: number;
  category: string;
  tool: string;
}

export interface ActionWorkoutList {
  type: string;
  payload: Array<Workout>;
}

export interface WorkoutListResponse {
  data: Array<Workout>;
  message: string;
}

// Action Creator - workoutList
export const actionSetWorkoutList = (payload: Array<Workout>): ActionWorkoutList => {
  payload = payload.map(el => Object.assign({}, el, {mySetCount:el.setCount, myCount:el.count, myBreakTime:el.breakTime}))
  return {
    type: SET_WORKOUT_LIST,
    payload,
  }
  
};

const initialState: Array<Workout> = [];

const workoutList = (
  state = initialState,
  action: ActionWorkoutList
): Array<Workout> => {
  switch (action.type) {
    case SET_WORKOUT_LIST:
      return action.payload
    default:
      return state;
  }
};

export default workoutList;
