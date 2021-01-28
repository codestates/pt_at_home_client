const SET_ROUTINE_LIST = 'SET_ROUTINE_LIST';

export interface WorkoutOfRoutine {
    id:number;
    title:string;
    instruction:string;
    image:string[];
    part:string[];
    setCount:number;
    count:number;
    breakTime:number;
    mySetCount:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    category:string;
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

const initialState:Array<Routine> = [{
    routineId:1,
    title:'아침 운동',
    workout:[{
        id:1,
        title:'plank',
        instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
        part:['코어', '복부'],
        setCount:2,
        count:30,
        breakTime:10,
        mySetCount:3,
        myCount:60,
        myBreakTime:30,
        calrorie:1000,
        category:'tool',
        tool:'none'
    },{
        id:2,
        title:'plank',
        instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
        part:['코어', '복부'],
        setCount:2,
        count:30,
        breakTime:10,
        mySetCount:3,
        myCount:60,
        myBreakTime:30,
        calrorie:1000,
        category:'맨몸',
        tool:'none'
    },{
      id:3,
      title:'plank',
      instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
      image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
      part:['코어', '복부'],
      setCount:2,
      count:30,
      breakTime:10,
      mySetCount:3,
      myCount:60,
      myBreakTime:30,
      calrorie:1000,
      category:'맨몸',
      tool:'none'
  },{
    id:4,
    title:'plank',
    instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
    image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
    part:['코어', '복부'],
    setCount:2,
    count:30,
    breakTime:10,
    mySetCount:3,
    myCount:60,
    myBreakTime:30,
    calrorie:1000,
    category:'맨몸',
    tool:'none'
},{
  id:5,
  title:'plank',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
  part:['코어', '복부'],
  setCount:2,
  count:30,
  breakTime:10,
  mySetCount:3,
  myCount:60,
  myBreakTime:30,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
},{
  id:6,
  title:'plank',
  instruction:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
  image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
  part:['코어', '복부'],
  setCount:2,
  count:30,
  breakTime:10,
  mySetCount:3,
  myCount:60,
  myBreakTime:30,
  calrorie:1000,
  category:'맨몸',
  tool:'none'
}]
}]

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
