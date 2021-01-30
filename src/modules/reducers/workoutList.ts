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
    mySetCount:number;
    myCount:number;
    myBreakTime:number;
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
  title:'동키킥',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:[
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A8.gif',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A81.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A82.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A83.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A84.png'
  ],
  part:['코어', '복부'],
  setCount:2,
  count:10,
  breakTime:10,
  mySetCount:3,
  myCount:10,
  myBreakTime:5,
  calrorie:1000,
  category:'tool',
  tool:'none'
},{
  id:2,
  title:'동키킥',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:[
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A8.gif',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A81.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A82.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A83.png',
      'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8F%E1%85%B5+%E1%84%8F%E1%85%B5%E1%86%A84.png'
  ],
  part:['코어', '복부'],
  setCount:2,
  count:10,
  breakTime:10,
  mySetCount:3,
  myCount:10,
  myBreakTime:5,
  calrorie:1000,
  category:'tool',
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
