import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  BsFillHouseDoorFill,
  BsLayoutTextWindowReverse,
  BsShiftFill,
  BsAlarmFill,
  BsFillHeartFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import DashboardInfo from './landingPages/DashboardInfo';
import { CSSTransition } from 'react-transition-group';
import CreateRoutineInfo from './landingPages/CreateRoutineInfo';
import RunRoutineInfo from './landingPages/RunRoutineInfo';
import MyRoutineInfo from './landingPages/MyRoutineInfo';
import MyPageInfo from './landingPages/MyPageInfo';
import HomeInfo from './landingPages/HomeInfo';

enum InfoPageNames {
  Home = 'home',
  Dashboard = 'dashboard',
  CreateRoutine = 'createRoutine',
  MyRoutine = 'myRoutine',
  MyPage = 'myPage',
  RunRoutine = 'runRoutine',
}

const Landing = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<InfoPageNames>(
    InfoPageNames.Home,
  );
  const changePage = (name: InfoPageNames) => {
    setCurrentPage(name);
  };
  // const pageRenderer = () => {
  //   switch (currentPage) {
  //     case InfoPageNames.Dashboard:
  //       return <DashboardInfo />;
  //     default:
  //       return null;
  //   }
  // };

  const timeout = () => {
    return {
      enter: currentPage !== InfoPageNames.Home ? 500 : 0,
      exit: 0,
    };
  };
  return (
    <Wrap>
      <NavWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.Home);
          }}
        >
          <MainIcon />
        </IconWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.Dashboard);
          }}
        >
          <DashBoardIcon />
        </IconWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.CreateRoutine);
          }}
        >
          <CreateIcon />
        </IconWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.RunRoutine);
          }}
        >
          <RunIcon />
        </IconWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.MyRoutine);
          }}
        >
          <MyRoutineIcon />
        </IconWrap>
        <IconWrap
          onClick={() => {
            changePage(InfoPageNames.MyPage);
          }}
        >
          <MyPageIcon />
        </IconWrap>
      </NavWrap>
      <Pages>
        <HomeInfo />
        <CSSTransition
          in={currentPage === InfoPageNames.Dashboard}
          timeout={timeout()}
          classNames={'page'}
        >
          <DashboardInfo />
        </CSSTransition>
        <CSSTransition
          in={currentPage === InfoPageNames.CreateRoutine}
          timeout={timeout()}
          classNames={'page'}
        >
          <CreateRoutineInfo />
        </CSSTransition>
        <CSSTransition
          in={currentPage === InfoPageNames.RunRoutine}
          timeout={timeout()}
          classNames={'page'}
        >
          <RunRoutineInfo />
        </CSSTransition>
        <CSSTransition
          in={currentPage === InfoPageNames.MyRoutine}
          timeout={timeout()}
          classNames={'page'}
        >
          <MyRoutineInfo />
        </CSSTransition>
        <CSSTransition
          in={currentPage === InfoPageNames.MyPage}
          timeout={timeout()}
          classNames={'page'}
        >
          <MyPageInfo />
        </CSSTransition>
      </Pages>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e5ec;
  display: flex;
`;
const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  width: 130px;
  background-color: #e0e5ec;
`;
const Pages = styled.div`
  flex: 1;
  position: relative;
  overflow-x: hidden;
`;
const IconWrap = styled.button`
  border: none;
  outline: none;
  color: #61677c;
  background-color: #ebecf0;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
const MainIcon = styled(BsFillHouseDoorFill)`
  font-size: 30px;
`;
const DashBoardIcon = styled(BsLayoutTextWindowReverse)`
  font-size: 30px;
`;
const CreateIcon = styled(BsShiftFill)`
  font-size: 30px;
`;
const RunIcon = styled(BsAlarmFill)`
  font-size: 30px;
`;
const MyRoutineIcon = styled(BsFillHeartFill)`
  font-size: 30px;
`;
const MyPageIcon = styled(BsFillPersonFill)`
  font-size: 30px;
`;
export default Landing;
