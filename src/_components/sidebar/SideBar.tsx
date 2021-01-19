import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const SideBar = () => {
  return (
    <Wrap>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/createroutine">createroutine</Link>
      <Link to="/workout">workout</Link>
      <Link to="/usersroutine">usersroutine</Link>
      <Link to="/mypage">mypage</Link>
    </Wrap>
  );
};

export default SideBar;
