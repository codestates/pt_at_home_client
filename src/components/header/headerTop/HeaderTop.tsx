import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderTopProps {
  isLogin: boolean;
  logoutHandler(): void;
}

const HeaderTop = ({ isLogin, logoutHandler }: HeaderTopProps) => {
  return (
    <Wrap>
      <ItemsDiv>
        <LeftItem></LeftItem>
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
`;
const LoginBtn = styled.button`
  opacity: 1;
  color: #000000;
  background: #f0f0f0;
  border: none;
  line-height: 35px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  outline: none;
  padding: 0;
`;
const LoginLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 100%;
  padding: 0 20px;
  display: block;
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
`;

export default HeaderTop;
