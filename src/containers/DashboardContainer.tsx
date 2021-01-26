import React, { useState } from 'react';
import { Dashboard } from '../components/main';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { URI } from '../index'
import { actionSetMyWorkouts, actionSetMyRoutines, actionRenewToken } from '../modules/actions'
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

interface SaveOrRemoveWorkoutResponse {
  data:Array<Workout>;
  message:string;
}

interface SaveOrRemoveRoutineResponse {
  data:Array<Routine>;
  message:string;
}

export interface DashboardProps {
  isLogin:boolean;
  workoutList:Array<Workout>;
  routineList:Array<Routine>;
  myWorkouts:Array<Workout>;
  myRoutines:Array<Routine>;
  isDashboardRoutine:boolean;
  workoutDetail:Workout | Object;
  routineDetail:Routine | Object;
  workoutModal:boolean;
  routineModal:boolean;
  clickWorkoutCard(id:number):void;
  offWorkoutModal():void;
  clickRoutineCard(id:number):void;
  offRoutineModal():void;
  saveOrRemoveWorkout(id:number):void;
  saveOrRemoveRoutine(id:number):void;
}

const DashboardContainer = ():JSX.Element => {
  const dispatch = useDispatch()
  const auth = useSelector((state:RootState) => state.userInfo.auth)
  const {isLogin, workoutList, routineList, myWorkouts, myRoutines, isDashboardRoutine} = useSelector((state:RootState) => state)
  const [workoutDetail, setWorkoutDetail] = useState({})
  const [routineDetail, setRoutineDetail] = useState({})
  const [workoutModal, setWorkoutModal] = useState(false)
  const [routineModal, setRoutineModal] = useState(false)
  

  const clickWorkoutCard = (id:number):void => {
    let currentWorkout:Workout = workoutList.filter(el => el.id === id)[0]
    setWorkoutDetail(currentWorkout)
    setWorkoutModal(true)
  }

  const offWorkoutModal = ():void => {
    setWorkoutModal(false)
  }

  const clickRoutineCard = (id:number):void => {
    let currentRoutine:Routine = routineList.filter(el => el.routineId === id)[0]
    setRoutineDetail(currentRoutine)
    setRoutineModal(true)
  }

  const offRoutineModal = ():void => {
    setRoutineModal(false)
  }

  const saveOrRemoveWorkout = async (id:number) => {
    let { token, expDate } = auth
    let isTokenValid = await actionRenewToken(token, expDate, dispatch)
    if (isTokenValid) {
      let savedWorkouts = myWorkouts.map(el => el.id)
      if (savedWorkouts.includes(id)) {
        axios.post<SaveOrRemoveWorkoutResponse>(`${URI}/myroutine/removeworkout`,{workoutId:id}, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${auth.token}`
          }})
          .then(res => {
            if (res.data.message === 'ok') {
              actionSetMyWorkouts(res.data.data)
            }
          })
      } else {
        axios.post<SaveOrRemoveWorkoutResponse>(`${URI}/myroutine/saveworkout`,{workoutId:id}, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${auth.token}`
          }})
          .then(res => {
            if (res.data.message === 'ok') {
              actionSetMyWorkouts(res.data.data)
            }
          })
      }
    }
  }

  const saveOrRemoveRoutine = async (id:number) =>  {
    let { token, expDate } = auth
    let isTokenValid = await actionRenewToken(token, expDate, dispatch)
    if (isTokenValid) {
      let savedRoutines = myRoutines.map(el => el.routineId)
      if (savedRoutines.includes(id)) {
        axios.post<SaveOrRemoveRoutineResponse>(`${URI}/myroutine/deleteroutine`,{workoutId:id}, {headers:{'Content-Type':'application/json'}})
          .then(res => {
            if (res.data.message === 'ok') {
              actionSetMyRoutines(res.data.data)
            }
          })
      } else {
        axios.post<SaveOrRemoveRoutineResponse>(`${URI}/myroutine/createroutine`,{workoutId:id}, {headers:{'Content-Type':'application/json'}})
          .then(res => {
            if (res.data.message === 'ok') {
              actionSetMyRoutines(res.data.data)
            }
          })
      }
    }
  }

  return (
    <Dashboard 
      isLogin={isLogin.isLogin}
      workoutList={workoutList}
      routineList={routineList}
      myWorkouts={myWorkouts}
      myRoutines={myRoutines}
      isDashboardRoutine={isDashboardRoutine}
      workoutDetail={workoutDetail}
      routineDetail={routineDetail}
      workoutModal={workoutModal}
      routineModal={routineModal}
      clickWorkoutCard={clickWorkoutCard}
      offWorkoutModal={offWorkoutModal}
      clickRoutineCard={clickRoutineCard}
      offRoutineModal={offRoutineModal}
      saveOrRemoveWorkout={saveOrRemoveWorkout}
      saveOrRemoveRoutine={saveOrRemoveRoutine}
    />  
  )
};

export default DashboardContainer;
