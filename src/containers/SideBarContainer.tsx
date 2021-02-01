import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import SideBar from '../components/sidebar/SideBar'
import { Workout } from '../modules/reducers/workoutList'
import { Routine } from '../modules/reducers/routineList'
import { actionSetMyWorkouts, actionSetMyRoutines, actionRenewToken } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

export interface WorkoutListResponse {
  data: Array<Workout>;
  message: string;
}

export interface MyRoutinesResponse {
  data: Array<Routine>;
  message: string;
}

export interface MyWorkoutsResponse {
  data: Array<Workout>;
  message: string;
}

export interface SideBarProps {
  getMyRoutines(): void;
  getMyWorkouts(): void;
}

const SideBarContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state:RootState) => state.userInfo)
    const currentRoutine = useSelector((state:RootState) => state.currentRoutine)
    const isLogin = useSelector((state:RootState) => state.isLogin.isLogin)
    const auth = userInfo.auth

    //completed
    const  getMyRoutines = async () => {
      if (isLogin) {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
            axios.get<MyRoutinesResponse>(`${URI}/myroutine`, {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${userInfo.auth.token}`
                }})
                .then(res => {
                    if (res.data.message === 'ok') {
                        dispatch(actionSetMyRoutines(res.data.data))
                    }
                })
        }
      }
    }

    // completed
    const getMyWorkouts = async () => {
      if (isLogin) {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
            axios.get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${userInfo.auth.token}`
                }})
                .then(res => {
                    if (res.data.message === 'ok') {
                        dispatch(actionSetMyWorkouts(res.data.data))
                    }
                })
        }
      }
    }

  return (
    <SideBar
      getMyRoutines={getMyRoutines}
      getMyWorkouts={getMyWorkouts}
    />
  );
};

export default SideBarContainer;
