import * as React from 'react';

const HeroSection = () => {
    return (
        <div className="min-h-screen pt-36 pl-10 w-full relative">
            <h1 className="font-sans font-black text-5xl z-50">Nemanja Kecman</h1>
            <h2 className="text-3xl font-bold font-sans text-gray-600">I build things for the web</h2>
            <div className="absolute bg-gray-900 hero-background"></div>
        </div>
    )
}

export default HeroSection;