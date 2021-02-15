import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import SideBar, { InfoPageNames } from '../components/sidebar/SideBar';
import { Workout } from '../modules/reducers/workoutList';
import { Routine } from '../modules/reducers/routineList';
import {
  actionSetMyWorkouts,
  actionSetMyRoutines,
  actionRenewToken,
  actionExpired
} from '../modules/actions';
import { URI } from '../index';
import axios from 'axios';
axios.defaults.withCredentials = true;

export interface WorkoutListResponse {
  data: Workout[];
  message: string;
}

export interface MyRoutinesResponse {
  data: Routine[];
  message: string;
}

export interface MyWorkoutsResponse {
  data: Workout[];
  message: string;
}

export interface SideBarProps {
  getMyRoutines(): void;
  getMyWorkouts(): void;
  currentPage: InfoPageNames;
  setCurrentPage: React.Dispatch<React.SetStateAction<InfoPageNames>>;
  isLogin:boolean;
}

interface ISideBarContainer {
  currentPage: InfoPageNames;
  setCurrentPage: React.Dispatch<React.SetStateAction<InfoPageNames>>;
}

const SideBarContainer = ({
  currentPage,
  setCurrentPage,
}: ISideBarContainer): JSX.Element => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const currentRoutine = useSelector(
    (state: RootState) => state.currentRoutine,
  );
  const isLogin = useSelector((state: RootState) => state.isLogin.isLogin);
  const auth = userInfo.auth;

  //completed
  const getMyRoutines = async () => {
    let { token, expDate } = auth;
    let isTokenValid = await actionRenewToken(token, expDate, dispatch);
    if (isTokenValid) {
      axios
        .get<MyRoutinesResponse>(`${URI}/myroutine`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.auth.token}`,
          },
        })
        .then((res) => {
          if (res.data.message === 'ok') {
            dispatch(actionSetMyRoutines(res.data.data));
          }
        });
    } else {
      dispatch(actionExpired({isExpired:true}))
    }
  };

  // completed
  const getMyWorkouts = async () => {
    if (isLogin) {
      let { token, expDate } = auth;
      let isTokenValid = await actionRenewToken(token, expDate, dispatch);
      if (isTokenValid) {
        axios
          .get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.auth.token}`,
            },
          })
          .then((res) => {
            if (res.data.message === 'ok') {
              dispatch(actionSetMyWorkouts(res.data.data));
            }
          });
      }
    }
  };

  return (
    <SideBar
      getMyRoutines={getMyRoutines}
      getMyWorkouts={getMyWorkouts}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLogin={isLogin}
    />
  );
};

export default SideBarContainer;
