import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './modules/reducers';
import Root from './components/Root';
import {
  DashboardContainer,
  MyPageContainer,
  LoginContainer,
  SignupContainer,
  HeaderContainer,
  SideBarContainer,
  CreateRoutineContainer,
  RunRoutineContainer,
  MyRoutinesContainer,
  ControlBarContainer
} from './containers';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  const isExpired = useSelector((state: RootState) => state.isLogin.isExpired);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    if (isExpired) {
      history.push('/login');
    }
  }, [isExpired]);

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [prevPath]);

  const FeaturePage = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(true);

    const toggleBtn = () => {
      setOpen(!open);
    };
    return (
      <Wrap>
        <MainWrap className="wrap">
          <HeaderStyle className="header">
            <HeaderContainer />
          </HeaderStyle>
          <Bottom>
            <CSSTransition in={open} timeout={0} classNames={'sidebar'}>
              <SideWrap className="sidebar">
                <Side className="side-bar">
                  <SideBarContainer />
                  <TabBtn onClick={toggleBtn}>
                    {open ? <TabLeftIcon /> : <TabRightIcon />}
                  </TabBtn>
                </Side>
              </SideWrap>
            </CSSTransition>
            <CSSTransition in={open} timeout={0} classNames={'main'}>
              <Main className="main" isShowSidebar={open}>
              {location.pathname === '/dashboard' || location.pathname === '/createroutine'?
                <ControlBarContainer />: ''}
                <Switch>
                  <Route path={'/dashboard'} component={DashboardContainer} />
                  <Route
                    path={'/createRoutine'}
                    component={CreateRoutineContainer}
                  />
                  <Route path={'/usersroutine'} component={MyRoutinesContainer} />
                  <Route path={'/runroutine'} component={RunRoutineContainer} />
                  <Route path={'/mypage'} component={MyPageContainer} />
                </Switch>
              </Main>
            </CSSTransition>
          </Bottom>
        </MainWrap>
      </Wrap>
    );
  };

  return (
    <>
      {location.pathname === '/' ? (
        <Root />
      ) : location.pathname === '/signup' ? (
        <SignupContainer />
      ) : location.pathname === '/login' ? (
        <LoginContainer prevPath={prevPath} />
      ) : (
        <FeaturePage />
      )}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Bottom = styled.div`
  display: flex;
  height: 100%;
`;
const TabBtn = styled.div`
  position: absolute;
  right: -32px;
  color: #7f97a7;
  cursor: pointer;
  width: 32px;
  height: 132px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIxMzEiIHZpZXdCb3g9IjAgMCAzMiAxMzEiPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNFNEU0RTQiIGQ9Ik0yMy43NzUgMTYuMzQxTC0uNSAxLjA5NnYxMjguODA4bDI0LjI3NS0xNS4yNDVjNC44MDctMy4wMiA3LjcyNS04LjI5NyA3LjcyNS0xMy45NzNWMzAuMzE0YzAtNS42NzYtMi45MTgtMTAuOTU0LTcuNzI1LTEzLjk3M3oiLz4KPC9zdmc+Cg==);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideWrap = styled.div`
  border-right: solid 1px #ededed;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &.sidebar-enter {
    transform: translateX(-230px);
  }
  &.sidebar-enter-done {
    transform: translateX(0);
  }
  &.sidebar-exit {
    transform: translateX(0);
  }
  &.sidebar-exit-done {
    transform: translateX(-230px);
  }
  transition: transform 300ms;
`;

const Side = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 200px 0 0 0;
`;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 99;
  position: fixed;
  background-color: #ffffff;
  top: 0;
`;
const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1;
  padding: ${(props: { isShowSidebar: boolean }) =>
    props.isShowSidebar ? '125px 0 0 255px' : '125px 0 0 25px'};
  &.main-enter {
    padding: '125px 0 0 25px';
  }
  &.main-enter-done {
    transform: '125px 0 0 255px';
  }
  &.main-exit {
    transform: '125px 0 0 255px';
  }
  &.main-exit-done {
    transform: '125px 0 0 25px';
  }
  transition: padding 300ms;
`;
const TabRightIcon = styled(IoIosArrowForward)`
  width: 14px;
  height: 20px;
`;
const TabLeftIcon = styled(IoIosArrowBack)`
  width: 14px;
  height: 20px;
`;
export default withRouter(App);
