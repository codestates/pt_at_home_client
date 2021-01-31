import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { CreateRoutine } from '../components/main';
import { ICard } from '../components/main/CreateRoutine';
import { RootState } from '../modules/reducers';
import { Workout } from '../modules/reducers/workoutList';
import {
  ModalConfirm,
  ModalCustomizeWorkout,
  ModalWorkoutDetail,
} from '../components/modal';
import {
  actionSetMyRoutines,
  actionSetCurrentRoutine,
  actionRenewToken,
  actionSetMyWorkouts,
  actionExpired,
} from '../modules/actions';
import { URI } from '..';
import axios from 'axios';
axios.defaults.withCredentials = true;

export interface CreateRoutineProps {
  addedWorkout: Array<Workout>;
  myWorkouts: Array<Workout>;
  clickCardBtnHandler(area: string, workout: Workout): void;
  saveMyRoutine(title: string): void;
  setCurretRoutine(): string;
  dropCardIntoRoutineBox(cards: ICard[]): void;
  clickWorkoutCardHandler(area: string, workout: Workout): void;
  isLogin: boolean;
}

export interface CustomWorkout {
  mySetCount: number;
  myCount: number;
  myBreakTime: number;
}

const CreateRoutineContainer = (): JSX.Element => {
  const path = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentRoutine = useSelector(
    (state: RootState) => state.currentRoutine,
  );
  const myWorkouts = useSelector((state: RootState) => state.myWorkouts);
  const myRoutines = useSelector((state: RootState) => state.myRoutines);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const auth = useSelector((state: RootState) => state.userInfo.auth);
  const [addedWorkout, setAddedWorkout] = useState<Workout[]>([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalCustomWorkout, setModalCustomWorkout] = useState(false);
  const [modalWorkoutDetail, setModalWorkoutDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    return () => {
      setModalConfirm(false);
      setModalCustomWorkout(false);
      setModalWorkoutDetail(false);
    };
  }, [path]);

  const removeWorkout = async () => {
    setModalConfirm(false);
    let { token, expDate } = auth;
    let isTokenValid = await actionRenewToken(token, expDate, dispatch);
    if (isTokenValid) {
      axios
        .post(
          `${URI}/myroutine/removeworkout`,
          { workoutId: selectedId },
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
      dispatch(actionExpired({ isExpired: true }));
    }
    setModalWorkoutDetail(false)
  };

  const editMyWorkout = ({
    mySetCount,
    myCount,
    myBreakTime,
  }: CustomWorkout): void => {
    console.log(mySetCount, myCount, myBreakTime);
    let targetEl = addedWorkout.filter((el) => el.id === selectedId)[0];
    let targetIdx = addedWorkout.indexOf(targetEl);
    let tempArr = [...addedWorkout];
    tempArr[targetIdx] = {
      ...targetEl,
      ...{ mySetCount, myCount, myBreakTime },
    };
    setAddedWorkout(tempArr);
  };

  const dropCardIntoRoutineBox = (cards: ICard[]): void => {
    let selecetedList: Array<Workout> = [];
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < myWorkouts.length; j++) {
        if (Number(cards[i].id) === myWorkouts[j].id) {
          selecetedList.push(myWorkouts[j]);
          break;
        }
      }
    }
    setAddedWorkout(selecetedList);
  };

  const saveMyRoutine = async (title: string) => {
    let { token, expDate } = auth;
    let isTokenValid = await actionRenewToken(token, expDate, dispatch);
    if (isTokenValid) {
      axios
        .post(
          `${URI}/myroutine/createroutine`,
          { workouts: addedWorkout, title },
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
          } else {
            console.log(res.data.message);
          }
        });
    } else {
      actionExpired({ isExpired: true });
    }
  };

  const setCurretRoutine = (): string => {
    if (addedWorkout.length === 0) {
      return '운동을 먼저 추가해주세요'
    } else {
      dispatch(actionSetCurrentRoutine({ workout: addedWorkout }));
      history.push('/runroutine');
      return ''
    } 
  };

  const offModalConfirm = () => {
    setModalConfirm(false);
  };

  const offModalCustomWorkout = () => {
    setModalCustomWorkout(false);
  };

  const offWorkoutModal = () => {
    setModalWorkoutDetail(false);
  };

  const clickCardBtnHandler = (area: string, workout: Workout): void => {
    setSelectedId(workout.id);
    if (area === 'cards') {
      setModalCustomWorkout(false);
      setModalWorkoutDetail(false);
      setModalConfirm(true);
    } else if (area === 'RoutineBox') {
      setModalConfirm(false);
      setModalWorkoutDetail(false);
      setModalCustomWorkout(true);
    }
  };

  const clickWorkoutCardHandler = (area: string, workout: Workout): void => {
    setSelectedId(workout.id);
    if (area === 'cards') {
      setModalWorkoutDetail(true);
      setModalCustomWorkout(false);
      setModalConfirm(false);
    }
  };

  return (
    <div>
      {modalConfirm ? (
        <ModalConfirm
          buttonHandler={removeWorkout}
          message={'해당 운동을 정말 지우시겠습니까?'}
          buttonValue={'확인'}
          modalClose={offModalConfirm}
        />
      ) : (
        ''
      )}
      {modalCustomWorkout ? (
        <ModalCustomizeWorkout
          workout={myWorkouts.filter((el) => el.id === selectedId)[0]}
          offModalCustomWorkout={offModalCustomWorkout}
          editMyWorkout={editMyWorkout}
        />
      ) : (
        ''
      )}
      {modalWorkoutDetail ? (
        <ModalWorkoutDetail
          myWorkouts={myWorkouts}
          workoutDetail={myWorkouts.filter((el) => el.id === selectedId)[0]}
          offWorkoutModal={offWorkoutModal}
          saveOrRemoveWorkout={removeWorkout}
        />
      ) : (
        ''
      )}
      <CreateRoutine
        isLogin={isLogin.isLogin}
        addedWorkout={addedWorkout}
        myWorkouts={myWorkouts}
        clickCardBtnHandler={clickCardBtnHandler}
        saveMyRoutine={saveMyRoutine}
        setCurretRoutine={setCurretRoutine}
        dropCardIntoRoutineBox={dropCardIntoRoutineBox}
        clickWorkoutCardHandler={clickWorkoutCardHandler}
      />
    </div>
  );
};

export default CreateRoutineContainer;
