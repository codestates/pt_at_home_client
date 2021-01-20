import * as React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Root from './_components/Root';
import SideBar from './_components/sidebar/SideBar';
import Header from './_components/header/Header';
import {
  CreateRoutine,
  Dashboard,
  MyPage,
  UsersRoutine,
  Workout,
} from './_components/main';
import styled from 'styled-components';

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

const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  console.log(location.pathname);
  const FeaturePage = () => {
    return (
      <Wrap>
        <Side className="side-bar">
          <SideBar />
        </Side>
        <Main className="wrap">
          <HeaderStyle className="header">
            <Header />
          </HeaderStyle>

          <div className="main">
            <Switch>
              <Route path={'/dashboard'} component={Dashboard} />
              <Route path={'/createRoutine'} component={CreateRoutine} />
              <Route path={'/usersroutine'} component={UsersRoutine} />
              <Route path={'/workout'} component={Workout} />
              <Route path={'/mypage'} component={MyPage} />
            </Switch>
          </div>
        </Main>
      </Wrap>
    );
  };

  return <>{location.pathname === '/' ? <Root /> : FeaturePage()}</>;
};

export default withRouter(App);
