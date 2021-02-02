import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import InfoGif from '../../img/imageedit_0_8240786446.gif';
import styled from 'styled-components';
import Back from '../../img/img5.png';

const CreateRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back}>
      <Wrap>
        <TextWrap>
          <Gif src={InfoGif} />
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
export default CreateRoutineInfo;
