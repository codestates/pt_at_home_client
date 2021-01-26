const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST';

export interface WorkoutOfRoutine {
  id: number;
  title: string;
  desc: string;
  image: string[];
  part: string[];
  mySet: number;
  myCount: number;
  myBreakTime: number;
  calrorie: number;
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

const initialState: Array<Routine> = [
  {
    routineId: 1,
    title: '아침 운동',
    workout: [
      {
        id: 1,
        title: 'plank',
        desc: '코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        image: [
          '../../img/urbanbrush-20190214083430029790.png',
          '../../img/urbanbrush-20190214083430029790.png',
        ],
        part: ['코어', '복부'],
        mySet: 3,
        myCount: 60,
        myBreakTime: 30,
        calrorie: 1000,
        tool: 'none',
      },
      {
        id: 2,
        title: 'plank',
        desc: '코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        image: [
          '../../img/urbanbrush-20190214083430029790.png',
          '../../img/urbanbrush-20190214083430029790.png',
        ],
        part: ['코어', '복부'],
        mySet: 3,
        myCount: 60,
        myBreakTime: 30,
        calrorie: 1000,
        tool: 'none',
      },
    ],
  },
];

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
