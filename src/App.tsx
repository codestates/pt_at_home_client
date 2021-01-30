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
} from './containers';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const App = ({
  match,
  history,
  location,
}: RouteComponentProps): JSX.Element => {
  const isExpired = useSelector((state: RootState) => state.isLogin.isExpired);
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [isPlag, setIsPlag] = useState(true);

  useEffect(() => {
    if (isExpired) {
      history.push('/login');
    }
  }, [isExpired]);

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [prevPath]);

  const Btn = () => {
    isPlag === true ? setIsPlag(false) : setIsPlag(true);
  };

  const FeaturePage = (): JSX.Element => {
    return (
      <Wrap>
        <MainWrap className="wrap">
          <HeaderStyle className="header">
            <HeaderContainer />
          </HeaderStyle>
          <Bottom>
            <SideWrap>
              <Side className="side-bar">
                <SideBarContainer />
                <TabBtn onClick={Btn}>
                  {isPlag === true ? <TabRightIcon /> : <TabLeftIcon />}
                </TabBtn>
              </Side>
            </SideWrap>
            <Main className="main">
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
  background-color: #ffffff;
  position: fixed;
  top: 0;
  height: 100%;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 191px 0 0 0;
  z-index: 1;
`

styled.div`
  background-color: #ffffff;
  // background-color: #ffffff;
  position: fixed;
  top: 0;
  height: 100%;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 191px 0 0 0;
  z-index: 1;
`;
const Side = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #ededed;
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
  padding: 215px 0 0 255px;
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
