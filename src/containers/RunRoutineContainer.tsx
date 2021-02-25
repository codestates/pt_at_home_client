import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RunRoutine } from '../components/main';
import { RootState } from '../modules/reducers';
import { CurrentRoutine } from '../modules/reducers/currentRoutine';
import { actionResetCurrentRoutine } from '../modules/actions'

export interface CurrentRoutineProps {
  currentRoutine: CurrentRoutine;
}

// type SetInterval=ReturnType<typeof setInterval>
// const initialInterve:SetInterval | any = null

const RunRoutineContainer = (): JSX.Element => {
  const dispatch = useDispatch()
  const currentRoutine = useSelector(
    (state: RootState) => state.currentRoutine,
  );

  useEffect(() => {
    return () => {
      dispatch(actionResetCurrentRoutine())
    }
  })

  return (
    <Wrap>
      {currentRoutine.workout.length > 0? <RunRoutine currentRoutine={currentRoutine} />:
      <NoneRoutine>Create Routine Page 에서 Routine을 먼저 생성해 주세요</NoneRoutine>}
      
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
`;

const NoneRoutine = styled.div`
  margin-top:60px;
  margin-left:50px;
  font-size:2rem;
  font-weight:bold;
  color:#555555;
`


export default RunRoutineContainer;
