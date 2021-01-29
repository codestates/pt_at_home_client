import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideBarProps } from '../../containers/SideBarContainer';

const SideBar = ({
  getWorkoutList,
  getMyRoutines,
  getMyWorkouts,
}: SideBarProps): JSX.Element => {
  return (
    <Wrap>
      <LinkWrap onClick={getWorkoutList}>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </LinkWrap>
      <LinkWrap onClick={getMyWorkouts}>
        <StyledLink to="/createroutine">Create Routine</StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to="/runroutine">Run Routine</StyledLink>
      </LinkWrap>
      <LinkWrap onClick={getMyRoutines}>
        <StyledLink to="/usersroutine">My Routines</StyledLink>
      </LinkWrap>
      <LinkWrap>
        {' '}
        <StyledLink to="/mypage">My Page</StyledLink>
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

const StyledLink = styled(Link)`
  color: #f0f0f0;
  text-decoration: none;
  font-size: 25px;
  width: 100%;
  display: block;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
`;

const LinkWrap = styled.div`
  &:hover {
    background-color: #30323d;
  }
`;

export default SideBar;
