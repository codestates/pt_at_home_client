import React from 'react';
import styled from 'styled-components';
import HeaderBottom from './headerBottom/HeaderBottom';
import HeaderTop from './headerTop/HeaderTop';
import HeaderMiddle from './hederMiddle/HeaderMiddle';
import { HeaderProps, KeywordData, FilterData } from '../../containers/HeaderContainer';
import SaveMeHomtLogo from '../../img/savemehomt_logo.png';

export interface HeaderBottomProps {
  searchHandler(keywordData: KeywordData): void;
  clickRoutineHandler(): void;
  filterHandler(filterData: FilterData): void;
}

const Header = ({
  isLogin,
  userName,
  searchHandler,
  clickRoutineHandler,
  filterHandler,
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
        {!noBottom && <HeaderBottom searchHandler={searchHandler} clickRoutineHandler={clickRoutineHandler} filterHandler={filterHandler}/>}
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
  width: 230px;
  border-right: solid 1px #ededed;
  height: 195px;
`;
export default Header;
