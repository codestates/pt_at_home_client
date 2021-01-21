import React from 'react';
import { Link } from 'react-router-dom'

const _Root = ():JSX.Element => {
    return (
        <div>
            Root
            <Link to='/dashboard'>move to dashboard</Link>
        </div>
    );
};

export default _Root;