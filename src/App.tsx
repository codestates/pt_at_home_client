import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Root from './components/Root';
import {
  MyRoutines,
  Workout,
} from './components/main';
import {
  DashboardContainer,
  MyPageContainer,
  LoginContainer,
  SignupContainer,
  HeaderContainer,
  SideBarContainer,
  CreateRoutineContainer
} from './containers'
import styled from 'styled-components';

const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {

  const FeaturePage = ():JSX.Element => {
    return (
      <Wrap>
        <Side className="side-bar">
          <SideBarContainer />
        </Side>
        <Main className="wrap">
          <HeaderStyle className="header">
            <HeaderContainer />
          </HeaderStyle>
          <div className="main">
            <Switch>
              <Route path={'/dashboard'} component={DashboardContainer} />
              <Route path={'/createRoutine'} component={CreateRoutineContainer} />
              <Route path={'/usersroutine'} component={MyRoutines} />
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
      {
        location.pathname === '/' ? <Root /> : 
        ( location.pathname === '/signup' ? <SignupContainer/> : 
        ( location.pathname === '/login'? <LoginContainer/> : 
        ( <FeaturePage /> )))
        }
    </>
  )
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