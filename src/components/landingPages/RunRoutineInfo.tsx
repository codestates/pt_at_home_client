import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import RunGif from '../../img/runroutine.gif';
import styled from 'styled-components';
import Back3 from '../../img/img4.png';

const RunRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back3}>
      <Wrap>
        <TextWrap>
          <Gif src={RunGif} />
        </TextWrap>
      </Wrap>
    </TransitionPageWrap>
  );
};
const Gif = styled.img`
  width: 1000px;
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrap = styled.div``;
export default RunRoutineInfo;
