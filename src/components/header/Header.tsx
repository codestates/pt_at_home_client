import React from 'react';
import styled from 'styled-components';
import HeaderMiddle from './hederMiddle/HeaderMiddle';
import { HeaderProps } from '../../containers/HeaderContainer';

const Header = ({
  isLogin,
  userName,
  logoutHandler,
  title,
}: HeaderProps): JSX.Element => {
  return (
    <Wrap>
      <HeaderWrap id="asd">
        <HeaderMiddle
          title={title}
          isLogin={isLogin}
          logoutHandler={logoutHandler}
        />
      </HeaderWrap>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 15px 15px 40px;
`;
export default Header;
