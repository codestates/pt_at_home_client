import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SideBarProps } from '../../containers/SideBarContainer';
// import Logo from '../../img/savemehomt_logo.png';
import Logo from '../../img/new_logo.svg';
import {
  BsLayoutTextWindowReverse,
  BsShiftFill,
  BsAlarmFill,
  BsFillHeartFill,
  BsFillPersonFill,
} from 'react-icons/bs';

enum InfoPageNames {
  Dashboard = 'dashboard',
  CreateRoutine = 'createRoutine',
  MyRoutine = 'myRoutine',
  MyPage = 'myPage',
  RunRoutine = 'runRoutine',
}
const SideBar = ({
  getMyRoutines,
  getMyWorkouts,
}: SideBarProps): JSX.Element => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<InfoPageNames>(
    InfoPageNames.Dashboard,
  );
  // const [toggle, setToggle] = useState<boolean>(false);
  const changePage = (name: InfoPageNames) => {
    setCurrentPage(name);
  };
  // const toggle = () => {};
  return (
    <Wrap>
      <Link to="/"><SaveLogo src={Logo} /></Link>
      <LinkWrap>
        <StyledLink onClick={(e) => history.push('/dashboard')}>
          <DashBoardIcon />
          Dashboard
        </StyledLink>
      </LinkWrap>
      <LinkWrap onClick={getMyWorkouts}>
        <StyledLink onClick={(e) => history.push('/createroutine')}>
          <CreateIcon />
          Create Routine
        </StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink onClick={(e) => history.push('/runroutine')}>
          <RunIcon />
          Run Routine
        </StyledLink>
      </LinkWrap>
      <LinkWrap onClick={getMyRoutines}>
        <StyledLink onClick={(e) => history.push('/usersroutine')}>
          <MyRoutineIcon />
          My Routines
        </StyledLink>
      </LinkWrap>
      <LinkWrap>
        {' '}
        <StyledLink onClick={(e) => history.push('/mypage')}>
          <MyPageIcon />
          My Page
        </StyledLink>
      </LinkWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const SaveLogo = styled.img`
  width: 120px;
  position: fixed;
  top: 10px;
  left: 50px;
`;
const StyledLink = styled.button`
  outline: none;
  text-align: left;
  color: #000000;
  background: none;
  border: none;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
`;

const LinkWrap = styled.div`
  margin-bottom: 5px;
  &:hover {
    background-color: #b4c2f6;
  }
`;
const DashBoardIcon = styled(BsLayoutTextWindowReverse)`
  font-size: 22px;
`;
const CreateIcon = styled(BsShiftFill)`
  font-size: 22px;
`;
const RunIcon = styled(BsAlarmFill)`
  font-size: 22px;
`;
const MyRoutineIcon = styled(BsFillHeartFill)`
  font-size: 22px;
`;
const MyPageIcon = styled(BsFillPersonFill)`
  font-size: 22px;
`;
export default SideBar;
