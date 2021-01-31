import { combineReducers } from 'redux';
import isLogin from './isLogin';
import userInfo from './userInfo';
import workoutList from './workoutList';
import myWorkouts from './myWorkouts';
import routineList from './routineList';
import myRoutines from './myRoutines';
import isDashboardRoutine from './isDashboardRoutine';
import currentRoutine from './currentRoutine';

export const rootReducer = combineReducers({
  isLogin,
  userInfo,
  workoutList,
  myWorkouts,
  routineList,
  myRoutines,
  isDashboardRoutine,
  currentRoutine,
});

export const appReducer = (state:any, action:any) => {
  if (action.type === 'LOGOUT') {
    state=undefined;
  }

  return rootReducer(state, action)
}


export type RootState = ReturnType<typeof rootReducer>;
