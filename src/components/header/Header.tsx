import React from 'react';
import styled from 'styled-components';
import HeaderTop from './headerTop/HeaderTop';
import HeaderMiddle from './hederMiddle/HeaderMiddle';
import { HeaderProps } from '../../containers/HeaderContainer';
import SaveMeHomtLogo from '../../img/savemehomt_logo_500.png';

const Header = ({
  isLogin,
  userName,
  logoutHandler,
  title,
}: HeaderProps): JSX.Element => {
  return (
    <Wrap>
      <Logo src={SaveMeHomtLogo} />
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
  border-bottom: solid 1px #ededed;
  
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 15px 15px 40px;
`;
const Logo = styled.img`
  width: 125px;
  height: 125px;
  margin: 0 35px;
`;
export default Header;
