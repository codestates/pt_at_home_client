import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import GifImg from '../../img/run_routine.gif';
import styled from 'styled-components';
import BackImg from '../../img/runroutine.png';

const RunRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={BackImg}>
      <Wrap>
        <ContentsWrap>
          <GifWrap src={GifImg} />
          <TextWrap>
            <Text1><TextBold>Run Routine Page </TextBold>에서</Text1>
            <Text2>생성한 루틴에 맞춰서 운동을 시작해볼까요?</Text2>
            <LineBlock></LineBlock>
          </TextWrap>
        </ContentsWrap>
      </Wrap>
    </TransitionPageWrap>
  );
};

const Wrap = styled.div`
  height:100vh;
  background-image:url(${BackImg})
`
const ContentsWrap = styled.div`
  position:relative;
  display:flex;
  flex-flow: column nowrap;
  width:795px;
  left:75px;
  top:130px;
`
const TextWrap = styled.div`
  transform:scale(1, 1.2) translateX(3%)

`
const TextBold = styled.span`
  color:rgba(211, 116, 112, 100%);
  font-weight:bold;
`
const Text1 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.5rem;
  margin-top:50px;
  margin-bottom:20px;
`

const Text2 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.2rem;
  margin-top:20px;
  margin-bottom:20px;
  padding-left:25px;
`

const LineBlock = styled.div`
  border:2px solid rgba(112, 193, 211, 70%);
  width:500px;
  border-radius:10px;
  margin-bottom:40px;
  // transform:translateX(-10%);
`

const GifWrap = styled.img`
  width:750px;
  htight:395px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`
export default RunRoutineInfo;
