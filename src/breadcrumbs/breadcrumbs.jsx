"use client"

import React from 'react';
import { motion } from 'framer-motion';
import style from "./breadcrumb.module.css";

function Breadcrumbs({ title }) {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animations for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            <motion.div
                className={`${style.breadcrumb} h-90 w-full flex flex-col justify-center items-center lg:items-start xl:items-start px-24`}
                style={{
                    backgroundImage: `url('/Image/secBg.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Title */}
                <motion.h2
                    className="text-white font-bold text-3xl lg:text-6xl xd:text-6xl"
                    variants={itemVariants}
                >
                    {title}
                </motion.h2>
                <br />
                {/* Subtitle */}
                <motion.p
                    className={`text-red-400 font-medium text-xl ${style.org_name}`}
                    variants={itemVariants}
                >
                    Many Faces Of Karma Foundation (MFKF)
                </motion.p>
            </motion.div>
        </>
    );
}

export default Breadcrumbs;