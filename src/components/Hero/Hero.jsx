"use client"

import React, { useState, useEffect } from 'react';
import style from "./Hero.module.css";
import { Button } from '@mui/material';

// Importing images or components
import { HeroImg } from './HeroImg';

const Hero = () => {
    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(HeroImg.findIndex(img => img.active));

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % HeroImg.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`${style.heroCont} relative w-full flex items-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${HeroImg[currentIndex].src})` }}
        >
            {/* Overlay for enhancing text contrast */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Main content container */}
            <div className="relative z-10 max-w-5xl text-white px-8 md:px-16 lg:px-24 py-12">
                <div className="heading text-2xl md:text-5xl sm:text-5xl font-semibold">
                    <p className="tracking-wide">We are</p>
                    <p className={`${style.orgName} text-red-500 font-bold`}>Many Faces Of Karma Foundation</p>
                </div>
                <div className="sub-heading mt-3 text-lg md:text-2xl md:mt-2 sm:text-2xl sm:md-1">
                    <p className="font-semibold">We help people achieve their dreams</p>
                </div>
                <div className="content mt-6 space-y-2">
                    <p className="relative pl-4 border-l-4 border-red-500 min-w-fit sm:max-w-sm md:max-w-md text-sm md:text-lg sm:text-lg">
                        We empower students to realize their dreams by providing essential resources and unwavering support, igniting their potential to shine.
                    </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <Button variant="contained" className="py-2 px-6 bg-red-400 hover:bg-red-500">
                        Donate
                    </Button>
                    <Button variant="outlined" className="py-2 px-6 text-white border-white">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
