import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Backimg from '../../img/Home.gif';
import BackImg from '../../img/InfoMain.png';
const HomeInfo = () => {
  return (
    <Wrap>
      <ContentsWrap>
        <Contents>
          <TextWrap>
            <div> We are here to save you. </div>
            <div>keep going, </div>
            <div>and keep working out.</div>
            <div>Just call it, Save Me HomT!</div>
          </TextWrap>
          <Img />
        </Contents>
        <BtnsWrap>
          <DashBtn>
            <DashLink to="/dashboard">TRY IT!</DashLink>
          </DashBtn>
          <LoginBtn>
            <LoginLink to="/login">Login</LoginLink>
          </LoginBtn>
        </BtnsWrap>

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
  background-position-x: left;
  background-position-y: 255px;
  background-size: 1087px;
`;
const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right:200px;
  margin-top:140px;
  // padding: 25px 100px 0 0;
`;

const Contents = styled.div`
  display: flex;
  // padding: 0 200px 0 0px;
  // margin-bottom: 200px;
`;
const TextWrap = styled.div`
  display:flex;
  flex-flow:column;
  // align-items:flex-start;
  justify-contents:center;
  width: 700px;
  font-size:2.7rem;
  line-height:1.5;
  padding-bottom:80px;
  font-weight:500;
  letter-spacing:2px;
  color:#94b5c0;
  @media (max-width: 1700px) {
    font-size : 2.3rem;
    width : 500px;
  }
  @media (max-width: 1575px) {
    display : none;
  }
`;

const Img = styled.div`
  width: 750px;
  height: 395px;
  background: url(${Backimg});
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`;


const BtnsWrap = styled.div`
  display:flex;
  height:200px;
`

const LoginBtn = styled.button`
  margin:20px;
  height:45px;
  width:150px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #d3e0dc;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const LoginLink = styled(Link)`
  color: #555555;
  text-decoration: none;
  width: 100%;
  font-size:1.3rem;
  letter-spacing:3px;
`;
const DashBtn = styled.button`
  font-size:1.3rem;
  margin:20px 5px;
  height:45px;
  width:150px;
  letter-spacing:3px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  background-color: #aee1e1;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  // margin-right: 1200px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const DashLink = styled(Link)`
  color:#555555;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
`;

export default HomeInfo;
