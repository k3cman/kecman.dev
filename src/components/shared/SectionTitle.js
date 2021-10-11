import * as React from 'react';

const SectionTitle = (props) => {
    const {title, subtitle} = props;
    return (
        <div className="flex flex-col justify-center w-full text-center">
            <h3 className="font-mono font-black text-5xl text-gray-600  ">{'> '}{title}_</h3>
            <p className="font-sans text-gray-400">{subtitle}</p>
        </div>
    )
}

export default SectionTitle;