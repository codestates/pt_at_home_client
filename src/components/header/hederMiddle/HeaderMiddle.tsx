import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IHeader {
  title: string;
  isLogin: boolean;
  userName:string;
  logoutHandler(): void;
}

const HeaderMiddle = ({
  title,
  isLogin,
  userName,
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
          <UserComment>{`구해줘, ${userName}!`}</UserComment>
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

const UserComment = styled.div`
  font-size:1.4rem;
  color:#363636;
  font-weight:900;
  margin-right:30px;
  letter-spacing:7px;
`
const LoginBtn = styled.button`
  outline: none;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  background: #f4f6ff;
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
  color: #55b3b1;
  letter-spacing:3px;
  font-size:0.9rem;
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
  color: #363636;
`;

export default HeaderMiddle;
