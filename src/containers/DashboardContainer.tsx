import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Dashboard } from '../components/main';
import {
  ModalWorkoutDetail,
  ModalRoutineDetail,
} from '../components/modal';
import { Workout } from '../modules/reducers/workoutList';
import { Routine } from '../modules/reducers/routineList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import {
  MyWorkoutsResponse,
  MyRoutinesResponse,
} from '../containers/SideBarContainer';
import { URI } from '../index';
import {
  actionSetMyWorkouts,
  actionSetMyRoutines,
  actionRenewToken,
  actionSetUserInfo,
  actionLogin,
  actionSetLoginType,
  actionSetWorkoutList,
  actionSetCurrentRoutine,
  actionExpired
} from '../modules/actions';
import axios from 'axios';
axios.defaults.withCredentials = true;

interface SaveOrRemoveWorkoutResponse {
  data: Array<Workout>;
  message: string;
}

interface SaveOrRemoveRoutineResponse {
  data: Array<Routine>;
  message: string;
}

interface WorkoutListResponse {
  data: Array<Workout>;
  message: string;
}

export interface DashboardProps {
  isLogin: boolean;
  workoutList: Array<Workout>;
  routineList: Array<Routine>;
  myWorkouts: Array<Workout>;
  myRoutines: Array<Routine>;
  isDashboardRoutine: boolean;
  workoutDetail: Workout | Object;
  routineDetail: Routine | Object;
  workoutModal: boolean;
  clickWorkoutCard(id: number): void;
  clickRoutineCard(id: number): void;
  saveOrRemoveWorkout(id: number): void;
  saveOrRemoveRoutine(id: number): void;
}

export interface ModalRoutineProps {
  routineDetail: Routine;
  offRoutineModal(): void;
  saveOrRemoveRoutine(id: number): void;
  loginModal?:boolean;
  offLoginModal?: () => void;
  clickRunRoutine:() => void;
}

export interface ModalWorkoutProps {
  workoutDetail: Workout;
  myWorkouts: Array<Workout>;
  offWorkoutModal(): void;
  saveOrRemoveWorkout(id: number): void;
}

const DashboardContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.userInfo.auth);
  const {
    isLogin,
    workoutList,
    routineList,
    myWorkouts,
    myRoutines,
    isDashboardRoutine,
  } = useSelector((state: RootState) => state);
  const [workoutDetail, setWorkoutDetail] = useState(workoutList[0]);
  const [routineDetail, setRoutineDetail] = useState(routineList[0]);
  const [workoutModal, setWorkoutModal] = useState(false);
  const [routineModal, setRoutineModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const path = useLocation();
  const history = useHistory();

  useEffect(() => {
    return () => {
      setWorkoutModal(false);
      setWorkoutModal(false);
      setLoginModal(false);
    };
  }, [path]);

  // 실제 test 필요
  // 깃헙 = 20
  // 구글 = 73
  // 카카오 = 86
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      let source: string = '';
      if (authorizationCode.length === 20) source = 'github';
      else if (authorizationCode.length === 73) source = 'google';
      else if (authorizationCode.length === 86) source = 'kakao';
      axios
        .post(
          `${URI}/users/${source}`,
          { authCode: authorizationCode },
          { headers: { 'Content-Type': 'application/json' } },
        )
        .then((res) => {
          if (res.data.message === 'auth success') {
            dispatch(actionSetUserInfo(res.data.data));
            window.localStorage.setItem('userId', String(res.data.data.id))
            window.localStorage.setItem('userEmail', res.data.data.email)
            window.localStorage.setItem('userName', res.data.data.userName)
            window.localStorage.setItem('token', res.data.data.auth.token)
            window.localStorage.setItem('expDate', res.data.data.auth.expDate)
            window.localStorage.setItem('type', source)
            window.localStorage.setItem('isLogin', 'true')
            dispatch(
              actionLogin({ isLogin: true, isExpired: false, type: source }),
            );
          } else {
            history.push('/signup');
            dispatch(actionSetLoginType({ type: 'guest' }));
          }
        });
    }
  }, []);

  useEffect(() => {
    if (isLogin.isLogin) {
      axios
        .get<MyWorkoutsResponse>(`${URI}/myroutine/myworkout`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => {
          if (res.data.message === 'ok') {
            dispatch(actionSetMyWorkouts(res.data.data));
          }
        });
      axios
        .get<MyRoutinesResponse>(`${URI}/myroutine`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => {
          if (res.data.message === 'ok') {
            dispatch(actionSetMyRoutines(res.data.data));
          }
        });
    }
  }, [isLogin])


  // useEffect(() => {
  //   getWorkoutList();
  // }, [isLogin.isLogin]);

  // const getWorkoutList = async () => {
  //   axios
  //     .get<WorkoutListResponse>(`${URI}/main`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       // if (res.data.message === 'ok') {
  //       dispatch(actionSetWorkoutList(res.data.data));
  //       // }
  //     });
  // };

  const clickWorkoutCard = (id: number): void => {
    let currentWorkout: Workout = workoutList.filter((el) => el.id === id)[0];
    setWorkoutDetail(currentWorkout);
    setWorkoutModal(true);
  };

  const offWorkoutModal = (): void => {
    setWorkoutModal(false);
  };

  const clickRoutineCard = (id: number): void => {
    let currentRoutine: Routine = routineList.filter(
      (el) => el.routineId === id,
    )[0];
    console.log(currentRoutine)
    setRoutineDetail(currentRoutine);
    setRoutineModal(true);
  };

  const offRoutineModal = (): void => {
    setRoutineModal(false);
    offLoginModal()
  };

  const offLoginModal = (): void => {
    setLoginModal(false);
  };

  const saveOrRemoveWorkout = async (id: number) => {
    if (isLogin.isLogin) {
      let { token, expDate } = auth;
      let isTokenValid = await actionRenewToken(token, expDate, dispatch);
      if (isTokenValid) {
        let savedWorkouts = myWorkouts.map((el) => el.id);
        if (savedWorkouts.includes(id)) {
          axios
            .post<SaveOrRemoveWorkoutResponse>(
              `${URI}/myroutine/removeworkout`,
              { workoutId: id },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${auth.token}`,
                },
              },
            )
            .then((res) => {
              if (res.data.message === 'ok') {
                dispatch(actionSetMyWorkouts(res.data.data));
              }
            });
        } else {
          axios
            .post<SaveOrRemoveWorkoutResponse>(
              `${URI}/myroutine/saveworkout`,
              { workoutId: id },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${auth.token}`,
                },
              },
            )
            .then((res) => {
              if (res.data.message === 'ok') {
                dispatch(actionSetMyWorkouts(res.data.data));
              }
            });
        }
      }
    } else {
      let savedWorkouts = myWorkouts.map((el) => el.id);
      if (savedWorkouts.includes(id)) {
        dispatch(actionSetMyWorkouts(myWorkouts.filter((el) => el.id !== id)));
      } else {
        dispatch(
          actionSetMyWorkouts([
            ...myWorkouts,
            ...workoutList.filter((el) => el.id === id),
          ]),
        );
      }
    }
    setWorkoutModal(false);
  };

  const saveOrRemoveRoutine = async (id: number) => {
    if (isLogin.isLogin) {
      let { token, expDate } = auth;
      let isTokenValid = await actionRenewToken(token, expDate, dispatch);
      if (isTokenValid) {
        let savedRoutines = myRoutines.map((el) => el.routineId);
        if (savedRoutines.includes(id)) {
          axios
            .post<SaveOrRemoveRoutineResponse>(
              `${URI}/myroutine/deleteroutine`,
              { routineId: id },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${auth.token}`,
                },
              },
            )
            .then((res) => {
              if (res.data.message === 'ok') {
                dispatch(actionSetMyRoutines(res.data.data));
                setRoutineModal(false)
              }
            });
        } else {
          const routineToSave = routineList.filter(el => el.routineId === id)[0]
          axios
            .post<SaveOrRemoveRoutineResponse>(
              `${URI}/myroutine/createroutine`,
              { title:routineToSave.title, workouts:routineToSave.workout },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${auth.token}`,
                },
              },
            )
            .then((res) => {
              if (res.data.message === 'ok') {
                dispatch(actionSetMyRoutines(res.data.data));
                setRoutineModal(false)
              }
            });
        }
      } else {
        dispatch(actionExpired({isExpired:true}))
      }
    } else {
      setLoginModal(true);
    }
  };

  const clickRunRoutine = () => {
    dispatch(actionSetCurrentRoutine(routineDetail))
    history.push('/runroutine')
  }

  return (
    <div>
      {workoutModal ? (
        <ModalWorkoutDetail
          myWorkouts={myWorkouts}
          workoutDetail={workoutDetail}
          offWorkoutModal={offWorkoutModal}
          saveOrRemoveWorkout={saveOrRemoveWorkout}
        />
      ) : (
        ''
      )}
      {routineModal ? (
        <ModalRoutineDetail
          routineDetail={routineDetail}
          offRoutineModal={offRoutineModal}
          saveOrRemoveRoutine={saveOrRemoveRoutine}
          loginModal={loginModal}
          offLoginModal={offLoginModal}
          clickRunRoutine={clickRunRoutine}
        />
      ) : (
        ''
      )}
      {/* {loginModal ? <ModalRequestLogin offLoginModal={offLoginModal} /> : ''} */}
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
        clickWorkoutCard={clickWorkoutCard}
        clickRoutineCard={clickRoutineCard}
        saveOrRemoveWorkout={saveOrRemoveWorkout}
        saveOrRemoveRoutine={saveOrRemoveRoutine}
      />
    </div>
  );
};
export default DashboardContainer;
