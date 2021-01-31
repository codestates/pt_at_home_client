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
  background-color: #fbd46d;
  box-shadow: -5px -5px 20px #f7b506, 5px 5px 20px #f7b506;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fbd46d, 2px 2px 5px #f7b506;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #f7b506, inset -1px -1px 2px #fbd46d;
  }
`;
const LoginLink = styled(Link)`
  color: #3220eb;
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
