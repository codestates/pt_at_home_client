import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

export enum InfoPageNames {
  Dashboard = 'dashboard',
  CreateRoutine = 'createRoutine',
  MyRoutine = 'myRoutine',
  UsersRoutine = 'usersroutine',
  MyPage = 'myPage',
  RunRoutine = 'runRoutine',
}
const SideBar = ({
  getMyRoutines,
  getMyWorkouts,
  currentPage,
  setCurrentPage,
  isLogin
}: SideBarProps): JSX.Element => {
  const history = useHistory();
  // const [toggle, setToggle] = useState<boolean>(false);
  const changePage = (name: InfoPageNames) => {
    setCurrentPage(name);
  };
  // const toggle = () => {};
  return (
    <Wrap>
      <Link to='/'><SaveLogo src={Logo} /></Link>
      <LinkWrap
        onClick={(e) => {
          changePage(InfoPageNames.Dashboard);
          history.push('/dashboard');
        }}
        isActive={currentPage === InfoPageNames.Dashboard}
      >
        <DashBoardIcon />
        Dashboard
      </LinkWrap>
      <LinkWrap
        isActive={currentPage === InfoPageNames.CreateRoutine}
        onClick={() => {
          changePage(InfoPageNames.CreateRoutine);
          getMyWorkouts();
          history.push('/createroutine');
        }}
      >
        <CreateIcon />
        Create Routine
      </LinkWrap>
      <LinkWrap
        isActive={currentPage === InfoPageNames.RunRoutine}
        onClick={(e) => {
          changePage(InfoPageNames.RunRoutine);
          history.push('/runroutine');
        }}
      >
        <RunIcon />
        Run Routine
      </LinkWrap>
      {isLogin? 
      <>
        <LinkWrap
          isActive={currentPage === InfoPageNames.UsersRoutine}
          onClick={(e) => {
            // e.preventDefault()
            changePage(InfoPageNames.UsersRoutine);
            getMyRoutines();
            history.push('/usersroutine');
          }}
        >
          <MyRoutineIcon />
          My Routines
        </LinkWrap>
        <LinkWrap
          isActive={currentPage === InfoPageNames.MyPage}
          onClick={(e) => {
            changePage(InfoPageNames.MyPage);
            history.push('/mypage');
          }}
        >
          <MyPageIcon />
          My Page
        </LinkWrap>
      </>
      :'' }
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

const LinkWrap = styled.div`
  outline: none;
  letter-spacing:0.3px;
  text-align: left;
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? '#fbf7a7' : '#000000'};
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
  margin-bottom: 5px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? '#bbbbbb' : '#FFFFFF'};
  &:hover {
    background-color: #f1f3f8;
    color:#000000;
  }
`;
const DashBoardIcon = styled(BsLayoutTextWindowReverse)`
  font-size: 22px;
  margin-left:5px;
  margin-right:10px;
`;
const CreateIcon = styled(BsShiftFill)`
  font-size: 22px;
  margin-left:5px;
  margin-right:10px;
`;
const RunIcon = styled(BsAlarmFill)`
  font-size: 22px;
  margin-left:5px;
  margin-right:10px;
`;
const MyRoutineIcon = styled(BsFillHeartFill)`
  font-size: 22px;
  margin-left:5px;
  margin-right:10px;
`;
const MyPageIcon = styled(BsFillPersonFill)`
  font-size: 22px;
  margin-left:5px;
  margin-right:10px;
`;
export default SideBar;
