import React from 'react';
import ControlBar from '../components/component/ControlBar';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../modules/reducers';
import {
  actionSetWorkoutList,
  actionSetRoutineList,
  actionToggleDashboardType,
  actionRenewToken,
  actionExpired,
} from '../modules/actions';
import { Workout } from '../modules/reducers/workoutList';
import { Routine } from '../modules/reducers/routineList';
import { URI } from '../index';
import axios from 'axios';
import styled from 'styled-components';
axios.defaults.withCredentials = true;

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
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.userInfo.auth);
  const isDashboardRoutine = useSelector(
    (state: RootState) => state.isDashboardRoutine,
  );

  //completed
  const searchHandler = async (keywordData:KeywordData) => {
      axios.post<SearchResponse>(`${URI}/main/search`, keywordData, {
          headers:{
              'Content-Type':'application/json',
              'Authorization':`Bearer ${auth.token}`
          }})
          .then(res => {
              if (res.data.message === 'ok') {
                  dispatch(actionSetWorkoutList(res.data.data))
                  if (isDashboardRoutine) dispatch(actionToggleDashboardType(false))
              } else if (res.data.message === 'not found') {
                  dispatch(actionSetWorkoutList([]))
              }
          })
  }
  // completed
  const filterHandler = (filterData:FilterData) => {  
      axios.post<FilterResponse>(`${URI}/main/filter`, {...filterData, path:path.substring(1)}, {
          headers:{
              'Content-Type':'application/json',
              'Authorization':`Bearer ${auth.token}`
          }})
          .then(res => {
              console.log(res.data.data)
              if (res.data.message === 'ok') {
                  actionSetWorkoutList(res.data.data)
              } else if (res.data.message === 'not found') {
                  actionSetWorkoutList([])
              }
              if (isDashboardRoutine) dispatch(actionToggleDashboardType(false))
          })
    }
  };

  const clickRoutineHandler = async () => {
    let { token, expDate } = auth;
    let isTokenValid = await actionRenewToken(token, expDate, dispatch);
    if (isTokenValid) {
      axios
        .get<RoutineResponse>(`${URI}/main/routine`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => {
          if (res.data.message === 'ok') {
            dispatch(actionSetRoutineList(res.data.data));
            dispatch(actionToggleDashboardType(true));
          }
        });
    } else {
      dispatch(actionExpired({ isExpired: true }));
    }
  };

  return (
    <Wrap className="sssss">
      <ControlBar
        searchHandler={searchHandler}
        clickRoutineHandler={clickRoutineHandler}
        filterHandler={filterHandler}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 95px;
  z-index: 1;
`;
export default ControlBarContainer;
