import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import RunGif from '../../img/run_routine.gif';
import styled from 'styled-components';
import Back3 from '../../img/img4.png';

const RunRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back3}>
      <Wrap>
        <TextWrap>
          <Comment>Just Do It, Like Me! </Comment>
          <Comment>Run Your Routine Whenever You Want.</Comment> 
        </TextWrap>
          <Gif src={RunGif} />
      </Wrap>
    </TransitionPageWrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  justify-content: center;
`;

const Gif = styled.img`
  width: 850px;
  margin-right:500px;
  margin-top:100px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;

`;

const TextWrap = styled.div`
  font-size:3rem;
  letter-spacing:3px;
  font-weight:500;
  color:#ee9595;
  display:flex;
  flex-flow:column nowrap;
`;

const Comment = styled.div`
  margin-bottom: 20px
`
export default RunRoutineInfo;
