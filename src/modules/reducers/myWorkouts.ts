import { Workout } from './workoutList'

const SET_MY_WORKOUTS = 'SET_MY_WORKOUTS';

export interface ActionMyWorkouts {
  type: string;
  payload: Array<Workout>;
}

// Action Creator - myWorkouts
export const actionSetMyWorkouts = (
  payload: Array<Workout>,
): ActionMyWorkouts => ({
  type: SET_MY_WORKOUTS,
  payload,
});

const initialState: Array<Workout> = [{
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
  title:'plank',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
  part:['코어', '복부'],
  setCount:3,
  count:60,
  breakTime:30,
  mySetCount:3,
  myCount:60,
  myBreakTime:3,
  calrorie:1000,
  category:'기구',
  tool:'none'
},{
  id:3,
  title:'jump',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
  part:['어깨', '엉덩이'],
  setCount:3,
  count:60,
  breakTime:30,
  mySetCount:3,
  myCount:60,
  myBreakTime:3,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
},{
  id:4,
  title:'test',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
  part:['어깨', '엉덩이'],
  setCount:3,
  count:60,
  breakTime:30,
  mySetCount:3,
  myCount:60,
  myBreakTime:3,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
}];

const myWorkouts = (
  state = initialState,
  action: ActionMyWorkouts,
): Array<Workout> => {
  switch (action.type) {
    case SET_MY_WORKOUTS:
      return action.payload;
    default:
      return state;
  }
};

export default myWorkouts;
