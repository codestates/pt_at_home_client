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
          <Gif src={InfoGif} />
        </TextWrap>
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
const Gif = styled.img`
  width: 1000px;
`;
const TextWrap = styled.div``;
const Text = styled.div``;
export default DashboardInfo;
