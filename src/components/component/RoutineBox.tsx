import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ICard } from '../main/CreateRoutine';
import { Workout } from '../../modules/reducers/workoutList';
import { ModalRequestLogin, ModalRoutineTitle } from '../modal';
import CreateRoutineCard from '../component/CreateRoutineCard';

interface IRoutineBox {
  isLogin: boolean;
  addedWorkout: Array<Workout>;
  cards: ICard[];
  myWorkouts: Array<Workout>;
  area: string;
  clickCardBtnHandler(area: string, workout: Workout): void;
  clickWorkoutCardHandler(area: string, workout: Workout): void;
  saveMyRoutine(title: string): void;
  setCurretRoutine(): string;
  dropCardIntoRoutineBox(cards: ICard[]): void;
  allClear(): void;
}

const RoutineBox = ({
  isLogin,
  addedWorkout,
  cards,
  myWorkouts,
  area,
  clickCardBtnHandler,
  clickWorkoutCardHandler,
  saveMyRoutine,
  setCurretRoutine,
  dropCardIntoRoutineBox,
  allClear,
}: IRoutineBox): JSX.Element => {
  const path = useLocation();
  const [modalLoginRequest, setModalLoginRequest] = useState(false);
  const [modalRoutineTitle, setModalRoutineTitle] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  useEffect(() => {
    return () => {
      setModalLoginRequest(false);
      setModalRoutineTitle(false);
    };
  }, [path]);

  useEffect(() => {
    setAlertMsg('');
    dropCardIntoRoutineBox(cards);
  }, [cards]);

  const numberWithCommas = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const clickSaveRoutine = (): void => {
    if (isLogin) {
      if (cards.length === 0) setAlertMsg('운동을 먼저 추가해주세요');
      else setModalRoutineTitle(true);
    } else {
      setModalLoginRequest(true);
    }
  };

  const offLoginModal = () => {
    setModalLoginRequest(false);
  };

  const offModalRoutinetitle = () => {
    setModalRoutineTitle(false);
  };

  const saveRoutineTitle = (title: string) => {
    saveMyRoutine(title);
    setModalRoutineTitle(false);
  };

  return (
    <Wrap>
      {modalLoginRequest ? (
        <ModalRequestLogin offLoginModal={offLoginModal} />
      ) : (
        ''
      )}
      {modalRoutineTitle ? (
        <ModalRoutineTitle
          offModalRoutinetitle={offModalRoutinetitle}
          saveRoutineTitle={saveRoutineTitle}
        />
      ) : (
        ''
      )}
      <Droppable droppableId="RoutineBox" type="Task">
        {(provided) => (
          <>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <CardWrap>
                {cards.length === 0 ? (
                  ''
                ) : (
                  <ClearBtnWrap>
                    <ClearBtn
                      type="button"
                      value="Clear All"
                      onClick={allClear}
                    />
                  </ClearBtnWrap>
                )}
                {cards &&
                  cards.map((card, index) => (
                    <CreateRoutineCard
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                      workout={
                        myWorkouts.filter((el) => el.id === Number(card.id))[0]
                      }
                      area={area}
                      clickCardBtnHandler={clickCardBtnHandler}
                      clickWorkoutCardHandler={clickWorkoutCardHandler}
                    />
                  ))}
              </CardWrap>
            </div>
          </>
        )}
      </Droppable>
      <ContentWrap>
        <Summary>
          <SummaryHead>Summary</SummaryHead>
          <EachSummary>
            <Tag>예상 소요 시간</Tag>
            <Content>{`${
              Math.round(addedWorkout.reduce(
                (acc, cur) => acc + (cur.image.length === 2 ? cur.myCount : cur.myCount*1.8),
                0,
              ) / 60)
            } Min`}</Content>
          </EachSummary>
          <EachSummary>
            <Tag>총 소요 칼로리</Tag>
            <Content>{`${numberWithCommas(
              addedWorkout.reduce(
                (acc, cur) =>
                  acc +
                  cur.calrorie *
                    (Math.round(cur.myCount / cur.count) *
                      Math.round(cur.mySetCount / cur.setCount)),
                0,
              ),
            )} kcal`}</Content>
          </EachSummary>
          <EachSummary>
            <Tag>총 운동 갯수</Tag>
            <Content>{addedWorkout.length}</Content>
          </EachSummary>
        </Summary>
        <ControlBtn>
          <SaveBtn
            type="button"
            value="Save Routine"
            onClick={clickSaveRoutine}
          />
          <RunBtn
            type="button"
            value="Run Routine"
            onClick={() => setAlertMsg(setCurretRoutine())}
          />
        </ControlBtn>
        <AlertMsg>{alertMsg}</AlertMsg>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 20px 0 20px 20px;
  background-color: #f2f3f7;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  justify-content: space-between;
  border-radius: 5px;
  position: fixed;
  height: 620px;
`;

const CardWrap = styled.div`
  background-color: #e9eef5;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  width: 310px;
  height: 100%;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px 10px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #30475e;
    border-radius: 6px;
  }
`;

const ClearBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1%;
`;

const ClearBtn = styled.input`
  outline: none;
  font-weight: 700;
  margin: 5px 0 5px 0;
  color: #ff0000;
  border: none;
  border-radius: 10px;
  background: #f2f3f7;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const ContentWrap = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: space-between;
  padding: 1% 4%;
`;

const SummaryHead = styled.div`
  color: #30475e;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Summary = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 300px;
  justify-content: space-around;
  margin-bottom: 35%;
`;
const EachSummary = styled.div`
  color: #555555;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  padding: 2% 1%;
  border-bottom: 1px solid #00587a;
`;
const Tag = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #555555;
  margin-left: 1%;
`;
const Content = styled.div`
  margin-right: 3%;
`;
const ControlBtn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 10%;
`;

const SaveBtn = styled.input`
  outline: none;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10% 0;
  color: #30475e;
  height: 35px;
  border: none;
  border-radius: 20px;
  background: #f2f3f7;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;
const RunBtn = styled.input`
  outline: none;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10% 0;
  color: #30475e;
  height: 35px;
  border: none;
  border-radius: 20px;
  background: #f2f3f7;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const AlertMsg = styled.div`
  text-align: center;
  color: red;
`;

export default RoutineBox;
