import React from 'react';
import { useDispatch } from 'react-redux'
import SideBar from '../components/sidebar/SideBar'
import { actionSetWorkoutList, actionSetMyWorkouts, actionSetMyRoutines } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface Workout {
    id:number;
    title:string;
    desc:string;
    image:string[];
    part:string[];
    set:number;
    count:number;
    breakTime: number;
    calrorie: number;
    tool: string;
}

interface WorkoutOfRoutine {
    id:number;
    title:string;
    desc:string;
    image:string[];
    part:string[];
    mySet:number;
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

    const getWorkoutList = ():void => {
        axios.get<WorkoutListResponse>(`${URI}/main`, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'ok') {
                    dispatch(actionSetWorkoutList(res.data.data))
                }
            })
    }

    const  getMyRoutines = ():void => {
        axios.get<MyRoutinesResponse>(`${URI}/myroutine`, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'ok') {
                    dispatch(actionSetMyRoutines(res.data.data))
                }
            })
    }

    const getMyWorkouts = ():void => {
        axios.get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'ok') {
                    dispatch(actionSetMyWorkouts(res.data.data))
                }
            })
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