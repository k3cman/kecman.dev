import * as React from 'react';
import ContactPlaceholder from './ContactPlaceholder';
import Navigation from './Navigation';

const Layot = (props) => {
    return (
        <div className="page-wrapper bg-gray-100 p-5">
            <ContactPlaceholder />
            <Navigation />
            <div className="max-w-7xl mx-auto">{props.children}</div>
        </div>
    )
}

export default Layot;