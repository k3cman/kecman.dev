import * as React from 'react';

const Layot = (props) => {
    return (
        <div className="page-wrapper bg-gray-100 p-5">
            {props.children}
        </div>
    )
}

export default Layot;