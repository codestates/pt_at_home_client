const SET_MY_WORKOUTS = 'SET_MY_WORKOUTS';

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
    tool: string;
}

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

const initialState: Array<Workout> = [];

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
