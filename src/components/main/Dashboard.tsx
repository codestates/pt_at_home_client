import React from 'react';
import styled from 'styled-components';
import RoutineCard from '../component/RoutineCard';
import WorkoutCard from '../component/WorkoutCard';
import { DashboardProps } from '../../containers/DashboardContainer'

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
  offWorkoutModal,
  clickRoutineCard,
  offRoutineModal,
  saveOrRemoveWorkout,
  saveOrRemoveRoutine
}:DashboardProps):JSX.Element => {

  return (
    <Warp>
      <BodyWrap>
        <CardWrap>
          <Cardli>
            {isDashboardRoutine ? 
            routineList.map(el => <RoutineCard key={el.routineId} routineCard={el}/>):
            workoutList.map(el => <WorkoutCard key={el.id} workoutCard={el}/>)
            }
          </Cardli>
        </CardWrap>
      </BodyWrap>
    </Warp>
  );
};

const Warp = styled.div`
  height: 100vh;
  background-color: #13141c;
`;
const BodyWrap = styled.div`
  width: 1480px;
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
  width: 300px;
  height: 372px;
  margin: 35px;
`;

export default Dashboard;