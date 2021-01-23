import React from 'react';
import Header from '../components/header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import {
  actionLogout,
  actionSetWorkoutList,
  actionSetRoutineList,
} from '../modules/actions';
import { URI } from '../index';
import axios from 'axios';
axios.defaults.withCredentials = true;

interface Workout {
  id: number;
  title: string;
  desc: string;
  image: string[];
  set: number;
  count: number;
  breakTime: number;
  calrorie: number;
  tool: string;
}

interface KeywordData {
  keyword: string;
}

interface SearchResponse {
  data: Array<Workout>;
  message: string;
}

export interface HeaderProps {
  isLogin: boolean;
}

const HeaderContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.isLogin);

  const searchHandler = (keywordData: KeywordData): void => {
    axios
      .post<SearchResponse>(`${URI}/main/search`, keywordData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        if (res.data.message === 'ok') {
          dispatch(actionSetWorkoutList(res.data.data));
        }
      });
  };

  return <Header title={''} />;
};

export default HeaderContainer;
