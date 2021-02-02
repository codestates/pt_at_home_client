import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import styled from 'styled-components';
import Back4 from '../../img/img5.png';

const MyRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back4}>
      <Wrap>
        <TextWrap></TextWrap>
      </Wrap>
    </TransitionPageWrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrap = styled.div``;
export default MyRoutineInfo;
