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
  setCurretRoutine(addedWorkouts: ICard[]): void;
  dropCardIntoRoutineBox(cards: ICard[]): void;
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
}: IRoutineBox): JSX.Element => {
  const path = useLocation();
  const [modalLoginRequest, setModalLoginRequest] = useState(false);
  const [modalRoutineTitle, setModalRoutineTitle] = useState(false);

  useEffect(() => {
    return () => {
      setModalLoginRequest(false);
      setModalRoutineTitle(false);
    };
  }, [path]);

  useEffect(() => {
    dropCardIntoRoutineBox(cards);
  }, [cards]);

  const numberWithCommas = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const clickSaveRoutine = (): void => {
    if (isLogin) {
      setModalRoutineTitle(true);
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
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <CardWrap>
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
        )}
      </Droppable>
      <ContentWrap>
        <Summary>
          <SummaryHead>Summary</SummaryHead>
          <EachSummary>
            <Tag>예상 소요 시간</Tag>
            <Content>{`${
              addedWorkout.reduce(
                (acc, cur) => acc + (cur.image.length === 2 ? cur.myCount : 0),
                0,
              ) / 60
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
            onClick={() => setCurretRoutine(cards)}
          />
        </ControlBtn>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 20px 0 20px 20px;
  background-color: #f4f9ff;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  border-radius: 5px;
  position: fixed;
`;

const CardWrap = styled.div`
  background-color: #fff29b;
  width: 320px;
  height: 635px;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #979797;
    border-radius: 6px;
  }
`;

const ContentWrap = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  height: 635px;
  justify-content: space-between;
  padding: 1% 4%;
`;

const SummaryHead = styled.div`
  color: #000000;
  text-align: center;
  font-size: 2.5rem;
`;

const Summary = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 300px;
  justify-content: space-around;
`;
const EachSummary = styled.div`
  color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 2% 1%;
  border-bottom: 2px solid #ffe227;
`;
const Tag = styled.div`
  font-size: 1.2rem;
  margin-left: 1%;
`;
const Content = styled.div`
  margin-right: 3%;
`;
const ControlBtn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 15%;
`;

const SaveBtn = styled.input`
  font-size: 1.2rem;
  margin: 10% 0;
  height: 35px;
  border-radius: 8px;
  background-color: Transparent;
  border: 2px solid #ffe227;
  color: #000000;
`;
const RunBtn = styled.input`
  font-size: 1.5rem;
  margin: 5% 0;
  padding: 5% 3%;
  height: 50px;
  background-color: #ffe227;
  border-radius: 8px;
`;

export default RoutineBox;
