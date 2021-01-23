import React from 'react';
import styled from 'styled-components';
import CreateCard from '../component/CreateCard';
import RoutineCard from '../component/RoutineCard';
import WorkoutCard from '../component/WorkoutCard';
const Warp = styled.div`
  height: 100%;
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
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const Cardli = styled.li`
  width: 270px;
  margin: 25px;
`;

const Dashboard = () => {
  return (
    <Warp>
      <BodyWrap>
        <CardWrap>
          <Cardli>
            <WorkoutCard />
          </Cardli>
        </CardWrap>
      </BodyWrap>
    </Warp>
  );
};

export default Dashboard;
