import { WorkoutOfRoutine } from './routineList'
const SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE'
const RESET_CURRENT_ROUTINE = 'RESET_CURRENT_ROUTINE'

export interface CurrentRoutine {
    routineId?:number;
    title?:string;
    workout:Array<WorkoutOfRoutine>;
}

interface ActionSetCurrentRoutine {
    type:string;
    payload:CurrentRoutine;
}

interface ActionResetCurrentRoutine {
    type:String;
}

export const actionSetCurrentRoutine = (payload:CurrentRoutine):ActionSetCurrentRoutine => ({
    type:SET_CURRENT_ROUTINE,
    payload
})

export const actionResetCurrentRoutine = ():ActionResetCurrentRoutine => ({
    type:RESET_CURRENT_ROUTINE
})

// const initialState:CurrentRoutine = {
//     routineId:0,
//     title: 'fake data',
//     workout:[]
// }

const initialState:CurrentRoutine = {
    routineId:1,
    title:'아침 운동',
    workout:[{
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
        myCount:5,
        myBreakTime:5,
        calrorie:1000,
        category:'tool',
        tool:'none'
    },{
        id:2,
        title:'복근 스트레칭',
        instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        image:[
                'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png',
                'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png'
        ],
        part:['코어', '복부'],
        setCount:2,
        count:30,
        breakTime:10,
        mySetCount:3,
        myCount:3,
        myBreakTime:7,
        calrorie:1000,
        category:'맨몸',
        tool:'none'
    },{
      id:3,
      title:'스쿼트',
      instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
      image:[
          'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3.gif',
          'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/squat.png',
          'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/squat2.png'
      ],
      part:['코어', '복부'],
      setCount:2,
      count:30,
      breakTime:10,
      mySetCount:3,
      myCount:6,
      myBreakTime:8,
      calrorie:1000,
      category:'맨몸',
      tool:'none'
  },{
    id:4,
    title:'plank',
    instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
    image:[
        'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png',
        'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%BC.png'
    ],
    part:['코어', '복부'],
    setCount:2,
    count:30,
    breakTime:10,
    mySetCount:3,
    myCount:8,
    myBreakTime:3,
    calrorie:1000,
    category:'맨몸',
    tool:'none'
  },{
  id:5,
  title:'plank',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:[
    'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3.gif',
    'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/squat.png',
    'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/squat2.png'
    ],
  part:['코어', '복부'],
  setCount:2,
  count:30,
  breakTime:10,
  mySetCount:3,
  myCount:4,
  myBreakTime:6,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
  },{
  id:6,
  title:'plank',
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
  count:30,
  breakTime:10,
  mySetCount:3,
  myCount:7,
  myBreakTime:9,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
  }]
}

const currentRoutine = (state=initialState, action:ActionSetCurrentRoutine) => {
    switch (action.type) {
        case SET_CURRENT_ROUTINE:
            return {...state, ...action.payload}
        case RESET_CURRENT_ROUTINE:
            return initialState
        default:
            return state
    }
}

export default currentRoutine;
