import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import Back1 from '../../img/img51.png';
import InfoGif from '../../img/dashboard.gif';

const DashboardInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back1}>
      <Wrap>
        <TextWrap>
            <DashBoardText>We have a lot of workouts for you</DashBoardText>
            <DashBoardText>Just Pick What You Want.</DashBoardText>
        </TextWrap>
          <Gif src={InfoGif} />
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

const TextWrap = styled.div`
  line-height:1.5;
  font-weight:500;
  letter-spacing:1px;
  color:#94b5c0;
  display:flex;
  flex-flow:column;
  height:400px;
  align-items:flex-start;
  padding-top:20px;
  @media (max-width: 1700px) {
    font-size : 2.3rem;
    width : 500px;
  }
  @media (max-width: 1575px) {
    display : none;
  }
`;

const Gif = styled.img`
  width: 900px;
  height:450px;
  border-radius:30px;
  margin-left:50px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc
`;

const DashBoardText = styled.div`
  margin:5px 0;
  padding-left:20px;
  color:#184d47;
  font-size:2.7rem;
`


const Text = styled.div``;
export default DashboardInfo;
