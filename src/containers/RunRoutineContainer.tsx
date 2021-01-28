import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RunRoutine } from '../components/main';
import { RootState } from '../modules/reducers';
import { CurrentRoutine } from '../modules/reducers/currentRoutine';

export interface CurrentRoutineProps {
  currentRoutine: CurrentRoutine;
}

// type SetInterval=ReturnType<typeof setInterval>
// const initialInterve:SetInterval | any = null

const RunRoutineContainer = (): JSX.Element => {
  const currentRoutine = useSelector(
    (state: RootState) => state.currentRoutine,
  );

  return (
    <Wrap>
      <RunRoutine currentRoutine={currentRoutine} />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
`;
export default RunRoutineContainer;
