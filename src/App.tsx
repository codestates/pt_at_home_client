import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from './modules/reducers'
import { MyRoutines } from './components/main';
import Root from './components/Root';
import {
  DashboardContainer,
  MyPageContainer,
  LoginContainer,
  SignupContainer,
  HeaderContainer,
  SideBarContainer,
  CreateRoutineContainer,
  RunRoutineContainer
} from './containers'
import styled from 'styled-components';

enum TitleConstants {
  Dashboard = 'Dashboard',
  CreateRoutine = 'Create Routine',
  UsersRoutine = 'Users Routine',
  Workout = 'Workout',
  Mypage = 'Mypage',
}

const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  const isExpired = useSelector((state:RootState) => state.isLogin.isExpired)
  const [prevPath, setPrevPath] = useState(location.pathname)

  useEffect(() => {
    if (isExpired) {
      history.push('/login')
    } 
  },[isExpired])

  useEffect(() => {
    setPrevPath(location.pathname)
  }, [prevPath])

  const FeaturePage = (): JSX.Element => {
    return (
      <Wrap>
        <Side className="side-bar">
          <SideBarContainer />
        </Side>
        <MainWrap className="wrap">
          <HeaderStyle className="header">
            <HeaderContainer />
          </HeaderStyle>
          <Main className="main">
            <Switch>
              <Route path={'/dashboard'} component={DashboardContainer} />
              <Route
                path={'/createRoutine'}
                component={CreateRoutineContainer}
              />
              <Route path={'/usersroutine'} component={MyRoutines} />
              <Route path={'/workout'} component={RunRoutineContainer} />
              <Route path={'/mypage'} component={MyPageContainer}/>
            </Switch>
          </Main>
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
        <LoginContainer prevPath={prevPath}/>
      ) : (
        <FeaturePage />
      )}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;
const Side = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #13141c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 1px 30px 0 rgba(2, 2, 3, 0.7);
`;
const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #13141c;
  box-shadow: 0 1px 30px 0 rgba(2, 2, 3, 0.7);
  width: 100%;
  z-index: 99;
  position: sticky;
  top: 0;
`;
const MainWrap = styled.div`
  width: 100%;
`;
const Main = styled.div`
  height: calc(100% - 220px);
`;

export default withRouter(App);
