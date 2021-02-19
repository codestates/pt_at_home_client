import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import InfoGif from '../../img/create_routine.gif';
import styled from 'styled-components';
import Back from '../../img/img5.png';

const CreateRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back}>
      <Wrap>
        <TextWrap>
        Create Your Own Routine To Run For Today.
        </TextWrap>
          <Gif src={InfoGif} />
      </Wrap>
    </TransitionPageWrap>
  );
};


const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow:column;
  align-items: center;
  justify-content: center;
`;
const Gif = styled.img`
  width: 850px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  margin-left:100px;
`;
const TextWrap = styled.div`
  font-weight:500;
  color:#b68973;
  font-size:2.8rem;
  letter-spacing:3px;
  line-height:1.5;
  margin-bottom:70px;
  margin-right:500px;
`;
export default CreateRoutineInfo;
