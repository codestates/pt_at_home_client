import * as React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import Root from './_components/Root'
import SideBar from './_components/sidebar/SideBar'
import Header from './_components/header/Header'
import {CreateRoutine, Dashboard, MyPage, UsersRoutine, Workout} from './_components/main'
import DashboardContainers from './containers/page/DashboardContainers';


const App = ({match, history, location}: RouteComponentProps): JSX.Element => {
  console.log(location.pathname)

  const FeaturePage = () => {
    return (
      <>
        <div className='header'>
          <Header />
        </div>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='main'>
          <Switch>
            <Route path={'/dashboard'} component={Dashboard}/>
            <Route path={'/createRoutine'} component={CreateRoutine}/>
            <Route path={'/usersroutine'} component={UsersRoutine}/>
            <Route path={'/workout'} component={Workout}/>
            <Route path={'/mypage'} component={MyPage}/>
          </Switch>
        </div>
      </>
    )
  }

  return (
    <>
      {
        location.pathname === '/'
        ? 
        (<Root />) 
        :
        (FeaturePage())
      }
    </>
  )
}

export default withRouter(App);
