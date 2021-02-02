import React from 'react';
import styled from 'styled-components';
import TransitionPageWrap from './TransitionPageWrap';
import MyPage from '../../img/mypage.gif';
import Back6 from '../../img/img6.png';

const MyPageInfo = () => {
  return (
    <TransitionPageWrap backgroundColor={Back6}>
      <Wrap>
        <TextWrap>
          <Gif src={MyPage} />
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
export default MyPageInfo;
