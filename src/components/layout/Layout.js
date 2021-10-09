import * as React from 'react';
import Navigation from './Navigation';

const Layot = (props) => {
    return (
        <div className="page-wrapper bg-gray-100 p-5">
            <Navigation />
            <div className="px-4">{props.children}</div>
        </div>
    )
}

export default Layot;