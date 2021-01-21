import React from 'react';
import styled from 'styled-components';
import HeaderBottom from './headerBottom/HeaderBottom';
import HeaderTop from './headerTop/HeaderTop';
import HeaderMiddle from './hederMiddle/HeaderMiddle';
import { HeaderProps } from '../../containers/HeaderContainer'

const Header = (
  {
    isLogin,
    userName,
    searchHandler,
    clickRoutineHandler,
    logoutHandler
  }:HeaderProps):JSX.Element => {
  return (
    <HeaderWrap id="asd">
      <HeaderTop isLogin={isLogin} logoutHandler={logoutHandler}/>
      <HeaderMiddle />
      <HeaderBottom />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #13141c;
  box-shadow: 0 1px 30px 0 rgba(2, 2, 3, 0.7);
  padding: 30px;
`;

export default Header;
