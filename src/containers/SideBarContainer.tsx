import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import SideBar from '../components/sidebar/SideBar'
import { actionSetWorkoutList, actionSetMyWorkouts, actionSetMyRoutines, actionRenewToken } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface Workout {
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

interface WorkoutOfRoutine {
    id:number;
    title:string;
    instruction:string;
    image:string[];
    part:string[];
    mySetCount:number;
    myCount:number;
    myBreakTime: number;
    calrorie: number;
    tool: string;
}

export interface Routine {
  routineId: number;
  title: string;
  workout: Array<WorkoutOfRoutine>;
}

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
  getWorkoutList(): void;
  getMyRoutines(): void;
  getMyWorkouts(): void;
}

const SideBarContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state:RootState) => state.userInfo)
    const auth = userInfo.auth

    // completed
    const getWorkoutList = async () => {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
            axios.get<WorkoutListResponse>(`${URI}/main`, {
                headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${userInfo.auth.token}`
            }})
                .then(res => {
                    if (res.data.message === 'ok') {
                        dispatch(actionSetWorkoutList(res.data.data))
                    } 
                })
        }  
    }

    //completed
    const  getMyRoutines = async () => {
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

    // completed
    const getMyWorkouts = async () => {
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

  return (
    <SideBar
      getWorkoutList={getWorkoutList}
      getMyRoutines={getMyRoutines}
      getMyWorkouts={getMyWorkouts}
    />
  );
};

export default SideBarContainer;
