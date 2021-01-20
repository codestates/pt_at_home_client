import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;
const LinkWrap = styled.div`
  padding: 10px;
  &:hover {
    background-color: #30323d;
  }
`;
const SideBar = () => {
  return (
    <Wrap>
      <LinkWrap>
        <StyledLink to="/dashboard">dashboard</StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to="/createroutine">createroutine</StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to="/workout">workout</StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to="/usersroutine">usersroutine</StyledLink>
      </LinkWrap>
      <LinkWrap>
        {' '}
        <StyledLink to="/mypage">mypage</StyledLink>
      </LinkWrap>
    </Wrap>
  );
};

export default SideBar;
