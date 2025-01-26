"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from "./Hero.module.css";
import { Button } from '@mui/material';
import Link from 'next/link';

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
        >
            {/* Animated Background Image */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImg[currentIndex].src})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Overlay for enhancing text contrast */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Main content container */}
            <div className="relative z-10 max-w-5xl text-white px-8 md:px-16 lg:px-24 py-12">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="heading text-2xl md:text-5xl sm:text-5xl font-semibold">
                        <p className="tracking-wide">We are</p>
                        <p className={`${style.orgName} text-red-500 font-bold`}>Many Faces Of Karma Foundation</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="sub-heading mt-3 text-lg md:text-2xl md:mt-2 sm:text-2xl sm:md-1">
                        <p className="font-semibold">We help people achieve their dreams</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="content mt-6 space-y-2">
                        <p className="relative pl-4 border-l-4 border-red-500 min-w-fit sm:max-w-sm md:max-w-md text-sm md:text-lg sm:text-lg">
                            We empower students to realize their dreams by providing essential resources and unwavering support, igniting their potential to shine.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
                >
                    <Link href="/donate">
                        <Button variant="contained" className={`py-2 px-6 bg-red-400 hover:bg-red-500 sm:bg-red-400 ${style.contained}`}>
                            Donate
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outlined" className={`py-2 px-6 text-white border-white sm:text-white sm:border-red-400 ${style.outlined}`}>
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;