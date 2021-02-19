import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import MyPage from '../../img/my_page.gif';
import Back6 from '../../img/img6.png';

const MyPageInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back6}>
      <Wrap>
        <TextWrap>
          <Comment>{`> Daily Summary? Of Course, We Have!`}</Comment>
          <Comment>{`> Track Your Week`}</Comment>
          <Comment>{`> How much calrories have you burned today?`}</Comment>
        </TextWrap>
          <Gif src={MyPage} />
      </Wrap>
    </TransitionPageWrap>
  );
};
const Gif = styled.img`
  width: 850px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;

`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const TextWrap = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:flex-start;
  padding-bottom:200px;
  margin-right:50px;
  margin-left:50px;
`;

const Comment = styled.div`
  font-size:2rem;
  font-weight:500;
  margin:20px 0;
  color:#222831;
`;
export default MyPageInfo;
