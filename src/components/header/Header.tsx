import React from 'react';
import styled from 'styled-components';
import HeaderBottom from './headerBottom/HeaderBottom';
import HeaderTop from './headerTop/HeaderTop';
import HeaderMiddle from './hederMiddle/HeaderMiddle';
import { HeaderProps } from '../../containers/HeaderContainer';
import SaveMeHomtLogo from '../../img/savemehomt_logo_500.png';

const Header = ({
  isLogin,
  userName,
  searchHandler,
  clickRoutineHandler,
  logoutHandler,
  title,
}: HeaderProps): JSX.Element => {
  const noBottom = title !== 'DASHBOARD' && title !== 'CREATE ROUTINE';
  return (
    <Wrap>
      <Logo src={SaveMeHomtLogo} />
      <HeaderWrap id="asd">
        <HeaderTop isLogin={isLogin} logoutHandler={logoutHandler} />
        <HeaderMiddle title={title} />
        {!noBottom && <HeaderBottom />}
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
  flex-direction: column;
  width: 100%;
  padding: 15px 15px 15px 40px;
`;
const Logo = styled.img`
  width: 195px;
  height: 195px;
  margin: 0 35px;
`;
export default Header;
