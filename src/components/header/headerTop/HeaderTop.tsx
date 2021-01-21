import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

interface HeaderTopProps {
  isLogin:boolean
  logoutHandler():void;
}

const HeaderTop = ({isLogin, logoutHandler}:HeaderTopProps) => {
  return (
    <Wrap>
      <ItemsDiv>
        <LeftItem></LeftItem>
      </ItemsDiv>
      <ItemsDiv>
        <RightItem>
          {isLogin?
          <LoginBtn onClick={logoutHandler}>LOGOUT</LoginBtn> :
          <LoginBtn><Link to={'/login'}>LOGIN</Link></LoginBtn>}
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
  color: #f0f0f0;
  background: #202230;
  border: none;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
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
