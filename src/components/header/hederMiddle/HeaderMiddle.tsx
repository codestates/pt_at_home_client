import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IHeader {
  title: string;
  isLogin: boolean;
  logoutHandler(): void;
}

const HeaderMiddle = ({
  title,
  isLogin,
  logoutHandler,
}: IHeader): JSX.Element => {
  return (
    <Wrap>
      <ItemsDiv>
        <LeftItem>
          <MainTitle>{title}</MainTitle>
        </LeftItem>
      </ItemsDiv>
      <ItemsDiv>
        <RightItem>
          {isLogin ? (
            <LoginBtn onClick={logoutHandler}>LOGOUT</LoginBtn>
          ) : (
            <LoginBtn>
              <LoginLink to={'/login'}>LOGIN</LoginLink>
            </LoginBtn>
          )}
        </RightItem>
      </ItemsDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
const ItemsDiv = styled.div`
  display: flex;
  flex: 1;
`;
const LeftItem = styled(ItemsDiv)`
  justify-content: flex-start;
`;
const RightItem = styled(ItemsDiv)`
  justify-content: flex-end;
  padding: 0 15px 0 0;
`;
const LoginBtn = styled.button`
  outline: none;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
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
  color: #000000;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
`;
const MainTitle = styled.span`
  line-height: 32px;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
`;

export default HeaderMiddle;
