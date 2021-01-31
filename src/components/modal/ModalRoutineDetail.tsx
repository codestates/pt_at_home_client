import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { WorkoutOfRoutine } from '../../modules/reducers/routineList';
import { ModalRoutineProps } from '../../containers/DashboardContainer';
import _WorkoutCard from '../component/_WorkoutCard';
import { BiX } from 'react-icons/bi';

export interface MyWorkoutCardProps {
  myWorkoutCard: WorkoutOfRoutine;
}

const ModalRoutineDetail = ({
  routineDetail,
  offRoutineModal,
  saveOrRemoveRoutine,
}: ModalRoutineProps): JSX.Element => {
  const location = useLocation();
  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <Layer onClick={offRoutineModal} />
      <Frame>
        <ModalTop>
          <CloseBtnWrap>
            <CloseBtn onClick={offRoutineModal}>
              <Close />
            </CloseBtn>
          </CloseBtnWrap>
        </ModalTop>
        <Title>{routineDetail.title}</Title>
        <Main>
          <CardList>
            {routineDetail.workout.map((el) => (
              <_WorkoutCard key={el.id} myWorkoutCard={el} />
            ))}
          </CardList>
          <Description>
            <Summary>
              <Explanation>{`${
                routineDetail.workout.reduce(
                  (acc, cur) =>
                    acc + (cur.image.length === 2 ? cur.myCount : 0),
                  0,
                ) / 60
              } Min`}</Explanation>
              <Explanation>{`${numberWithCommas(
                routineDetail.workout.reduce(
                  (acc, cur) =>
                    acc +
                    cur.calrorie *
                      (Math.round(cur.myCount / cur.count) *
                        Math.round(cur.mySetCount / cur.setCount)),
                  0,
                ),
              )} kcal`}</Explanation>
              <Explanation>hello</Explanation>
              <Explanation>hello</Explanation>
            </Summary>
            <ControlBtn>
              <SaveBtn
                type="button"
                value={location.pathname === '/dashboard' ? 'SAVE' : 'DELETE'}
                onClick={() => {
                  saveOrRemoveRoutine(routineDetail.routineId);
                }}
              />
            </ControlBtn>
          </Description>
        </Main>
      </Frame>
    </>
  );
};
const Layer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.6;
`;

const Frame = styled.div`
  height: 600px;
  width: 500px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background-color: #e0e5ec;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: 400ms ease;
  position: fixed;
  left: 40%;
  top: 23%;
  padding: 5px;
  z-index: 1000;
`;

const Title = styled.div`
  font-weight: 700;
  color: #30475e;
  height: 50px;
  text-align: center;
  padding-top: 3%;
  font-size: 2rem;
`;
const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtnWrap = styled.div`
  padding-top: 2%;
  padding-right: 2%;
`;
const CloseBtn = styled.button`
  outline: none;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10% 0;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #d9e8fd;
  color: #30475e;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;
const Close = styled(BiX)`
  font-size: 30px;
  color: #304752;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  height: 78%;
`;

const CardList = styled.div`
  background-color: #d9e8fd;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  width: 260px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #abbcfb;
    border-radius: 6px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 200px;
  padding: 5px;
  margin: 2%;
`;

const Summary = styled.div``;

const ControlBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
const SaveBtn = styled.input`
  outline: none;
  padding: 5px 15px 5px 15px;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 10% 0;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #d9e8fd;
  color: #30475e;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const Explanation = styled.div`
  font-size: 1.3rem;
  color: #555555;
  background-color: #f6f5f5;
  margin: 0px 5px 20px 0px;
  padding: 5px 15px 5px;
  border-radius: 5px;
`;

export default ModalRoutineDetail;
