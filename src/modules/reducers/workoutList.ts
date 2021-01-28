import axios from 'axios'
axios.defaults.withCredentials = true;

const SET_WORKOUT_LIST = 'SET_WORKOUT_LIST'

export interface Workout {
    id:number;
    title:string;
    instruction:string;
    image:string[];
    part:string[];
    setCount:number;
    count:number;
    breakTime: number;
    calrorie: number;
    category:string;
    tool:string;
}

export interface ActionWorkoutList {
  type: string;
  payload: Array<Workout>;
}

export interface WorkoutListResponse {
    data:Array<Workout>;
    message:string;
}

// Action Creator - workoutList
export const actionSetWorkoutList = (
  payload: Array<Workout>,
): ActionWorkoutList => ({
  type: SET_WORKOUT_LIST,
  payload,
});

const initialState:Array<Workout> = [{
    id:1,
    title:'plank',
    instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
    image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
    part:['코어', '복부'],
    setCount:3,
    count:60,
    breakTime:30,
    calrorie:1000,
    category:'맨몸',
    tool:'none'
},{
    id:2,
    title:'plank',
    instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
    image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
    part:['코어', '복부'],
    setCount:3,
    count:60,
    breakTime:30,
    calrorie:1000,
    category:'기구',
    tool:'none'
}]

const workoutList = (
  state = initialState,
  action: ActionWorkoutList,
): Array<Workout> => {
  switch (action.type) {
    case SET_WORKOUT_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default workoutList;
