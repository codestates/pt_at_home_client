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
  routineModal,
  clickWorkoutCard,
  clickRoutineCard,
  saveOrRemoveWorkout,
  saveOrRemoveRoutine,
}: DashboardProps): JSX.Element => {

  return (
    <Wrap>
      <BodyWrap>
        <CardWrap>
          {!isDashboardRoutine
            ? routineList.map((el) => (
                <Cardli key={el.routineId}>
                  <RoutineCard routineCard={el} clickRoutineCard={clickRoutineCard} />
                </Cardli>
              ))
            : workoutList.map((el) => (
                <Cardli key={el.id}>
                  <WorkoutCard workoutCard={el} clickWorkoutCard={clickWorkoutCard}/>
                </Cardli>
              ))}
        </CardWrap>
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  min-height:100vh;
  background-color: #13141c;
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
`;
export default Dashboard;
