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
  border: none;
  border-radius: 20px;
  background: #f2f3f7;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #9d9ea1;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #9d9ea1, inset -1px -1px 2px #fff;
  }
`;
const LoginLink = styled(Link)`
  color: #b2c0f6;
  font-weight: 700;
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
