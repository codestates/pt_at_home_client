import React from 'react';
import styled from 'styled-components';
import RoutineCard from '../component/RoutineCard';
import WorkoutCard from '../component/WorkoutCard';
import { DashboardProps } from '../../containers/DashboardContainer';

const Dashboard = ({
  isLogin,
  workoutList,
  routineList,
  myWorkouts,
  myRoutines,
  isDashboardRoutine,
  workoutDetail,
  routineDetail,
  workoutModal,
  clickWorkoutCard,
  clickRoutineCard,
  saveOrRemoveWorkout,
  saveOrRemoveRoutine,
}: DashboardProps): JSX.Element => {
  return (
    <Wrap>
      <BodyWrap>
        <CardWrap>
          {isDashboardRoutine
            ? routineList.map((el) => (
                <Cardli key={el.routineId}>
                  <RoutineCard
                    routineCard={el}
                    clickRoutineCard={clickRoutineCard}
                  />
                </Cardli>
              ))
            : workoutList.map((el) => (
                <Cardli key={el.id}>
                  <WorkoutCard
                    workoutCard={el}
                    clickWorkoutCard={clickWorkoutCard}
                    saveOrRemoveWorkout={saveOrRemoveWorkout}
                    myWorkouts={myWorkouts}
                  />
                </Cardli>
              ))}
        </CardWrap>
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 95px;
`;
const BodyWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const CardWrap = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const Cardli = styled.li`
  // width: 270px;
  margin: 25px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.01, 1.01);
    transition: transform 300ms;
  }
`;
export default Dashboard;
