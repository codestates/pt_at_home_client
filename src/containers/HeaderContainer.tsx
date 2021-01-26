import React from 'react';
import Header from '../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { actionLogout, actionSetWorkoutList, actionSetRoutineList, actionToggleDashboardType, actionRenewToken } from '../modules/actions'
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
  routineId: number;
  title: string;
  workout: Array<WorkoutOfRoutine>;
}

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

interface LogoutResponse {
  message: string;
}

enum TitleConstants {
  Dashboard = 'Dashboard',
  CreateRoutine = 'Create Routine',
  UsersRoutine = 'Users Routine',
  Workout = 'Workout',
  Mypage = 'Mypage',
}

export interface HeaderProps {
  isLogin: boolean;
  userName: string;
  searchHandler(keywordData: KeywordData): void;
  clickRoutineHandler(): void;
  logoutHandler(): void;
  filterHandler(filterData: FilterData): void;
  title: string;
}

const HeaderContainer = ():JSX.Element => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state:RootState) => state.isLogin)
    const { userName, auth } = useSelector((state:RootState) => state.userInfo)
    const isDashboardRoutine = useSelector((state:RootState) => state.isDashboardRoutine)
    const location = useLocation()

    const titleGenerator = ():string => {
        switch (location.pathname) {
          case '/dashboard':
            return TitleConstants.Dashboard;
          case '/createroutine':
            return TitleConstants.CreateRoutine;
          case '/usersroutine':
            return TitleConstants.UsersRoutine;
          case '/workout':
            return TitleConstants.Workout;
          case '/mypage':
            return TitleConstants.Mypage;
          default:
            return '';
        }
      };

    const title = titleGenerator()

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
        }

    }

    const filterHandler = async (filterData:FilterData) => {
        let { token, expDate } = auth
        let isTokenValid = await actionRenewToken(token, expDate, dispatch)
        if (isTokenValid) {
            axios.post<FilterResponse>(`${URI}/main/filter`, filterData, {
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
        }
    }

    const logoutHandler = ():void => {
        axios.get<LogoutResponse>(`${URI}/users/signout`, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log('logout', res)
                if (res.data.message === 'signout success') {
                    dispatch(actionLogout({isLogin:false}))
                }
            })
    }
    
    return (
        <Header 
            isLogin={isLogin.isLogin}
            userName={userName}
            searchHandler={searchHandler}
            clickRoutineHandler={clickRoutineHandler}
            logoutHandler={logoutHandler}
            filterHandler={filterHandler}
            title={title}
        />
    );
};

export default HeaderContainer;
