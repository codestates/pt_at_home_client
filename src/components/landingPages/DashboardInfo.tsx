import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import BackImg from '../../img/dashboard.png';
import GifImg from '../../img/dashboard.gif';

const DashboardInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={BackImg}>
      <Wrap>
        <ContentsWrap>
          <GifWrap src={GifImg} />
          <TextWrap>
            <Text1>먼저 <TextBold>Dashboard Page </TextBold>에서</Text1>
            <Text2>루틴에 필요한 운동을 선택하여 저장하세요.</Text2>
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
  left:100px;
  top:130px;
`
const TextWrap = styled.div`
  transform:scale(1, 1.2) translateX(5%);

`
const TextBold = styled.span`
  color:rgba(250, 161, 58, 90%);
  font-weight:bold;
`
const Text1 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.3rem;
  margin-top:50px;
  margin-bottom:20px;
`

const Text2 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.1rem;
  margin-top:20px;
  margin-bottom:20px;
  padding-left:75px;
`

const LineBlock = styled.div`
  border:2px solid rgba(250, 161, 58, 50%);
  width:500px;
  margin-left:235px;
  border-radius:10px;
  margin-bottom:40px;
`

const GifWrap = styled.img`
  width:750px;
  htight:395px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`


const Text = styled.div``;
export default DashboardInfo;
