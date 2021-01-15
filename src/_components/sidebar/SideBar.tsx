import React from 'react';
import { Link } from 'react-router-dom'


const SideBar = () => {
    return (
        <div>
            <Link to='/dashboard'>dashboard</Link>
            <Link to='/createroutine'>createroutine</Link>
            <Link to='/workout'>workout</Link>
            <Link to='/usersroutine'>usersroutine</Link>
            <Link to='/mypage'>mypage</Link>
        </div>
    );
};

export default SideBar;