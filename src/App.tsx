import * as React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  useRouteMatch,
} from 'react-router-dom';
import Root from './components/Root';
import SideBar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import { CreateRoutine, UsersRoutine, Workout } from './components/main';
import {
  DashboardContainer,
  MyPageContainer,
  LoginContainer,
  SignupContainer,
} from './containers';
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
  const FeaturePage = () => {
    const titleGenerator = () => {
      switch (history.location.pathname) {
        case '/dashboard':
          return TitleConstants.Dashboard;
        case '/createroutine':
          return TitleConstants.CreateRoutine;
        case '/usersroutine':
          return TitleConstants.UsersRoutine;
        case '/workout':
          return TitleConstants.Workout;
        case '/mypage':
          return TitleConstants.Mypage;
        default:
          return '';
      }
    };
    return (
      <Wrap>
        <Side className="side-bar">
          <SideBar />
        </Side>
        <Main className="wrap">
          <HeaderStyle className="header">
            <Header title={titleGenerator()} />
          </HeaderStyle>
          <div className="main">
            <Switch>
              <Route path={'/dashboard'} component={DashboardContainer} />
              <Route path={'/createroutine'} component={CreateRoutine} />
              <Route path={'/usersroutine'} component={UsersRoutine} />
              <Route path={'/workout'} component={Workout} />
              <Route path={'/mypage'} component={MyPageContainer} />
            </Switch>
          </div>
        </Main>
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
        <LoginContainer />
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
`;
const Main = styled.div`
  width: 100%;
`;

export default withRouter(App);
