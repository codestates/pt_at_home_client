import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import GifImg from '../../img/my_page.gif';
import BackImg from '../../img/mypage.png';

const MyPageInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={BackImg}>
      <Wrap>
        <ContentsWrap>
          <GifWrap src={GifImg} />
          <TextWrap>
            <Text1>나의 운동량을 <TextBold>My Page </TextBold>에서</Text1>
            <Text2>그래프를 통해 확인 할 수 있습니다!</Text2>
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
  color:rgba(61, 117, 99, 90%);
  font-weight:bold;
`
const Text1 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.5rem;
  margin-top:50px;
  margin-bottom:20px;
  transform:translateX(-10%)
`

const Text2 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.4rem;
  margin-top:20px;
  margin-bottom:20px;
`

const LineBlock = styled.div`
  border:2px solid rgba(61, 117, 99, 50%);
  width:500px;
  border-radius:10px;
  margin-bottom:40px;
  transform:translateX(40%);
`

const GifWrap = styled.img`
  width:750px;
  htight:395px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`
export default MyPageInfo;
