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

interface Routine {
    routineId:number;
    title:string;
    workout:Array<WorkoutOfRoutine>;
}

interface WorkoutListResponse {
    data:Array<Workout>;
    message:string;
}

interface MyRoutinesResponse {
    data:Array<Routine>;
    message:string;
}

interface MyWorkoutsResponse {
    data:Array<Workout>;
    message:string;
}

export interface SideBarProps {
    getWorkoutList():void;
    getMyRoutines():void;
    getMyWorkouts():void;
}

const SideBarContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state:RootState) => state.userInfo)
    const auth = userInfo.auth

    const getWorkoutList = async () => {
        // dispatch(actionSetWorkoutList([{
        //     id:1,
        //     title:'test',
        //     desc:'코어운동으로써 매트를 깔고 하는게 좋은 운동이다',
        //     image:['https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'],
        //     part:['코어', '복부'],
        //     set:3,
        //     count:60,
        //     breakTime:30,
        //     calrorie:1000,
        //     tool:'none'
        // }]))
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