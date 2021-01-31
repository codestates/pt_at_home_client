import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import Backimg from '../../img/DashBoardInfo.jpg';
const DashboardInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={'#5a2c2c'}>
      <Wrap>
        <TextWrap>
          <Text>몸 관리, 건강 관리 꼭 헬스장 으로 가야 할까요?</Text>
          <Text>이제부터는 집에서 관리 합시다!</Text>
        </TextWrap>
        <Img />
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
const Img = styled.div`
  width: 640px;
  height: 447px;
  background: url(${Backimg});
`;

const TextWrap = styled.div``;
const Text = styled.div``;
export default DashboardInfo;
