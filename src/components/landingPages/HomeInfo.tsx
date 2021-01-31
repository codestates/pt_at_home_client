import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Backimg from '../../img/HomeInfo.jpg';
import BackImg from '../../img/InfoMain.png';
const HomeInfo = () => {
  return (
    <Wrap>
      <ContentsWrap>
        <LoginBtn>
          <LoginLink to="/login">로그인</LoginLink>
        </LoginBtn>
        <Contents>
          <Img />
          <TextWrap>
            <Text>몸 관리, 건강 관리 꼭 헬스장 으로 가야 할까요?</Text>
            <Text>이제부터는 집에서 관리 합시다!</Text>
          </TextWrap>
        </Contents>
        <DashBtn>
          <DashLink to="/dashboard">운동하러 갑시다!</DashLink>
        </DashBtn>
      </ContentsWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-position-x: right;
  background-position-y: 255px;
  background-size: 1087px;
`;
const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 25px 100px 0 0;
`;
const Img = styled.div`
  width: 640px;
  height: 447px;
  background: url(${Backimg});
`;
const LoginBtn = styled.button`
  outline: none;
  height: 30px;
  width: fit-content;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ebecf0;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const LoginLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
`;
const DashBtn = styled.button`
  outline: none;
  padding: 10px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ebecf0;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  margin-right: 1200px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const DashLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
  font-size: 35px;
`;
const Contents = styled.div`
  display: flex;
  padding: 0 200px 0 0px;
  margin-bottom: 200px;
`;
const TextWrap = styled.div``;
const Text = styled.div`
  margin-left: 340px;
`;
export default HomeInfo;
