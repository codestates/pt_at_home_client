import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GifImg from '../../img/Home.gif';
import BackImg from '../../img/home.png';
const HomeInfo = () => {
  return (
    <Wrap>
      <ContentsWrap>
        <TextWrap>
          <Text1><TextBold>SaveMeHomT </TextBold>와 함께</Text1>
          <Text2>집에서 재밌게 홈트레이닝을 즐기세요!</Text2>
          <LineBlock></LineBlock>
        </TextWrap>
        <GifWrap src={GifImg} />

        <BtnsWrap>
          <TryBtn>
            <TryLink to='/dashboard'>Try It!</TryLink>
          </TryBtn>
          <LoginBtn>
            <LoginLink to='/login'>Login</LoginLink>
          </LoginBtn>
        </BtnsWrap>
      </ContentsWrap>
    </Wrap>
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
  left:800px;
  top:100px;
`
const TextWrap = styled.div`
  transform:scale(1, 1.2) translateX(-10%)

`
const TextBold = styled.span`
  color:rgba(232, 102, 96, 100%);
  font-weight:bold;
`
const Text1 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.5rem;
  margin-top:20px;
  margin-bottom:20px;
`

const Text2 = styled.div`
  color:#555555;
  letter-spacing:3px;
  font-size:2.5rem;
  margin-top:20px;
  margin-bottom:20px;
  padding-left:75px;
`

const LineBlock = styled.div`
  border:2px solid rgba(232, 102, 96, 70%);
  width:500px;
  margin-left:350px;
  border-radius:10px;
  margin-bottom:40px;
`

const GifWrap = styled.img`
  width:750px;
  htight:395px;
  border-radius:30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`

const BtnsWrap = styled.div`
  display:flex;
  justify-content:center;
`

const LoginBtn = styled.button`
  margin:20px;
  height:45px;
  width:150px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid rgba(255, 255, 255, 0.2);
  border: 1px solid #30475e;
  border-radius: 20px;
  background-color: #f6f6f6;
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
  color: #30475e;
  text-decoration: none;
  width: 100%;
  font-size:1.3rem;
  letter-spacing:3px;
`;
const TryBtn = styled.button`
  margin:20px 5px;
  height:45px;
  width:150px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  background-color: #30475e;
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
const TryLink = styled(Link)`
  color:#f5f5f5;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
  font-size:1.3rem;
  letter-spacing:3px;
`;

export default HomeInfo;
