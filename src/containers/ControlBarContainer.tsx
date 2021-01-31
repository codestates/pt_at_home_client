import React from 'react';
import ControlBar from '../components/component/ControlBar'
import { useSelector, useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { RootState } from '../modules/reducers'
import {
    actionSetWorkoutList,
    actionSetRoutineList,
    actionToggleDashboardType,
    actionRenewToken,
    actionExpired
} from '../modules/actions'
import { Workout } from '../modules/reducers/workoutList'
import { Routine } from '../modules/reducers/routineList'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface KeywordData {
    keyword: string;
  }

interface FilterData {
    category: string;
    tool: Array<string>;
    part: Array<string>;
  }

interface SearchResponse {
data: Array<Workout>;
message: string;
}

interface FilterResponse {
data: Array<Workout>;
message: string;
}

interface RoutineResponse {
data: Array<Routine>;
message: string;
}

export interface ControlBarProps {
    searchHandler(keywordData: KeywordData): void;
    clickRoutineHandler(): void;
    filterHandler(filterData: FilterData): void;
}

const ControlBarContainer = () => {
    const path=useLocation().pathname
    const dispatch = useDispatch()
    const auth = useSelector((state:RootState) => state.userInfo.auth)
    const isDashboardRoutine = useSelector((state:RootState) => state.isDashboardRoutine)

    //completed
    const searchHandler = async (keywordData:KeywordData) => {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
          axios.post<SearchResponse>(`${URI}/main/search`, keywordData, {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${auth.token}`
              }})
              .then(res => {
                  if (res.data.message === 'ok') {
                      dispatch(actionSetWorkoutList(res.data.data))
                      if (isDashboardRoutine) dispatch(actionToggleDashboardType(false))
                  }
              })
        } else {
          dispatch(actionExpired({isExpired:true}))
        }
    }
    // completed
    const filterHandler = async (filterData:FilterData) => {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
          axios.post<FilterResponse>(`${URI}/main/filter`, {...filterData, path:path.substring(1)}, {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${auth.token}`
              }})
              .then(res => {
                  if (res.data.message === 'ok') {
                      actionSetWorkoutList(res.data.data)
                      if (isDashboardRoutine) dispatch(actionToggleDashboardType(false))
                  }
              })
        } else {
          dispatch(actionExpired({isExpired:true}))
        }
    }

    const clickRoutineHandler = async () => {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
          axios.get<RoutineResponse>(`${URI}/main/routine`, {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${auth.token}`
              }})
              .then(res => {
                  if (res.data.message === 'ok') {
                      dispatch(actionSetRoutineList(res.data.data))
                      dispatch(actionToggleDashboardType(true))
                  }
              })
        } else {
          dispatch(actionExpired({isExpired:true}))
        }
    }

    return (
        <div>
            <ControlBar 
                searchHandler={searchHandler}
                clickRoutineHandler={clickRoutineHandler}
                filterHandler={filterHandler}
            />
        </div>
    );
};

export default ControlBarContainer;