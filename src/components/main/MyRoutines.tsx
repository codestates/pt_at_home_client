import React from 'react';
import styled from 'styled-components';
import RoutineCard from '../component/RoutineCard';
import { MyRoutinesProps } from '../../containers/MyRoutinesContainer';

const MyRoutines = ({
  myRoutines,
  clickRoutineCard,
}: MyRoutinesProps): JSX.Element => {
  return (
    <Wrap>
      <BodyWrap>
        <CardWrap>
          {myRoutines.length > 0
            ? myRoutines.map((el) => (
                <Cardli key={el.routineId}>
                  <RoutineCard
                    routineCard={el}
                    clickRoutineCard={clickRoutineCard}
                  />
                </Cardli>
              ))
            : ''}
        </CardWrap>
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
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
  width: 270px;
  margin: 25px;
`;

export default MyRoutines;
