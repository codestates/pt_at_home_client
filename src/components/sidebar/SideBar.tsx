import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideBarProps } from '../../containers/SideBarContainer';
import Logo from '../../img/savemehomt_logo.svg';

const SideBar = ({
  getMyRoutines,
  getMyWorkouts,
}: SideBarProps): JSX.Element => {
  return (
    <Wrap>
      <SaveLogo src={Logo} />
      <LinkWrap>
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

const SaveLogo = styled.img`
  width: 170px;
  position: fixed;
  top: 10px;
  left: 25px;
`;
const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  width: 100%;
  display: block;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
`;

const LinkWrap = styled.div`
  &:hover {
    background-color: #b4c2f6;
  }
`;

export default SideBar;
