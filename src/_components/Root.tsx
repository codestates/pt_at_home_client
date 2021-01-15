import React from 'react';
import { Link } from 'react-router-dom'

const _Root = () => {
    return (
        <div>
            Root
            <Link to='/dashboard'>move to dashboard</Link>
        </div>
    );
};

export default _Root;