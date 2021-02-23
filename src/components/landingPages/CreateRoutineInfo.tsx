import React from 'react';
import TransitionPageWrap from './TransitionPageWrap';
import GifImg from '../../img/create_routine.gif';
import styled from 'styled-components';
import BackImg from '../../img/createroutine.png';

const CreateRoutineInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={BackImg}>
      <Wrap>
        <ContentsWrap>
          <GifWrap src={GifImg} />
          <TextWrap>
            <Text1><TextBold>Create Routine Page </TextBold>에서</Text1>
            <Text2>저장한 운동으로 나만의 루틴을 만들어보세요.</Text2>
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
  left:810px;
  top:200px;
`
const TextWrap = styled.div`
  transform:scale(1, 1.2) translateX(7%)

`
const TextBold = styled.span`
  color:rgba(141, 128, 254, 100%);
  font-weight:bold;
`
const Text1 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.5rem;
  margin-top:50px;
  margin-bottom:20px;
  padding-left:150px;
`

const Text2 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.3rem;
  margin-top:20px;
  margin-bottom:20px;
  transform:translateX(-10%)
`

const LineBlock = styled.div`
  border:2px solid rgba(251, 229, 53, 90%);
  width:500px;
  border-radius:10px;
  margin-bottom:40px;
  transform:translateX(-17%);
`

const GifWrap = styled.img`
  width:750px;
  htight:395px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`

export default CreateRoutineInfo;
