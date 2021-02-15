import React from 'react';
import ControlBar from '../components/component/ControlBar';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../modules/reducers';
import {
  actionSetWorkoutList,
  actionSetRoutineList,
  actionToggleDashboardType,
} from '../modules/actions';
import { Workout } from '../modules/reducers/workoutList';
import { Routine } from '../modules/reducers/routineList';
import { URI } from '../index';
import axios from 'axios';
import styled from 'styled-components';
import { IFilterOption } from '../App';
axios.defaults.withCredentials = true;

export interface KeywordData {
  keyword: string;
}

export interface FilterData {
  category: string;
  tool: string[];
  part: string[];
}

interface SearchResponse {
  data: Workout[];
  message: string;
}

interface FilterResponse {
  data: Workout[];
  message: string;
}

interface RoutineResponse {
  data: Routine[];
  message: string;
}

interface IControlBarContainer {
  filterArr: IFilterOption[];
  setFilterArr: React.Dispatch<React.SetStateAction<IFilterOption[]>>;
}

const ControlBarContainer = ({
  filterArr,
  setFilterArr,
}: IControlBarContainer): JSX.Element => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.userInfo.auth);
  const isDashboardRoutine = useSelector(
    (state: RootState) => state.isDashboardRoutine,
  );

  //completed
  const searchHandler = async (keywordData: KeywordData) => {
    axios
      .post<SearchResponse>(`${URI}/main/search`, keywordData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        if (res.data.message === 'ok') {
          dispatch(actionSetWorkoutList(res.data.data));
          if (isDashboardRoutine) dispatch(actionToggleDashboardType(false));
        } else if (res.data.message === 'not found') {
          dispatch(actionSetWorkoutList([]));
        }
      });
  };
  // completed
  const filterHandler = (filterData: FilterData) => {
    axios
      .post<FilterResponse>(
        `${URI}/main/filter`,
        { ...filterData, path: path.substring(1) },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
          },
        },
      )
      .then((res) => {
        if (res.data.message === 'ok') {
          dispatch(actionSetWorkoutList(res.data.data))
        } else if (res.data.message === 'not found') {
          dispatch(actionSetWorkoutList([]))
        }
        if (isDashboardRoutine) dispatch(actionToggleDashboardType(false));
      });
  };

  const clickRoutineHandler = async () => {
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
      dispatch(actionToggleDashboardType(true));
  };

  const toggleDashboardType = ():void => {
    dispatch(actionToggleDashboardType(false))
  }

  return (
    <Wrap className="sssss">
      <ControlBar
        searchHandler={searchHandler}
        clickRoutineHandler={clickRoutineHandler}
        filterHandler={filterHandler}
        filterArr={filterArr}
        setFilterArr={setFilterArr}
        isDashboardRoutine={isDashboardRoutine}
        toggleDashboardType={toggleDashboardType}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  z-index: 1;
`;
export default ControlBarContainer;
