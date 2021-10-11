import * as React from 'react';

const HeroSection = () => {
    return (
        <div className="flex hero">
            <div className="flex flex-col justify-center">
                        <h1 className="font-mono text-7xl font-bold">Hi, my <br /> name is <span className="font-black text-green-500">Kecman</span>.</h1>
                        <h2 className="text-5xl font-bold font-mono text-gray-600"> {'>'} I build things for the web_</h2>
                    </div>
        </div>
        
    )
}

export default HeroSection;