"use client"

import React from 'react';
import { motion } from 'framer-motion';
import styles from "./procedure.module.css";
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';
import { useRouter } from 'next/navigation';

// Icons
import { FaBookReader } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

// Data
import { procedureData } from "./procedureData";

const ProcedureComp = () => {
    const router = useRouter();

    // Redirect to form
    const redirectForm = () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdt3k7nAt6P3KAlLpStV9F8Gm8a7bLtNVwGyT1sPR_i-evHSA/viewform?usp=sf_link';
    };

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
            <Breadcrumbs title={"Procedure"} />
            {/* Requirements Section */}
            <motion.section
                className="py-10 bg-gray-100 sm:py-16 lg:py-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <motion.h2
                        className={`text-3xl font-bold leading-tight text-red-400 sm:text-4xl lg:text-5xl ${styles.heading}`}
                        variants={itemVariants}
                    >
                        Requirements / Conditions
                    </motion.h2>
                    <motion.p
                        className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600"
                        variants={itemVariants}
                    >
                        Following Requirements should be fulfilled to be eligible for the program
                    </motion.p>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                        {/* Step 1 */}
                        <motion.div variants={itemVariants}>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-blue-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                                </svg>
                                <svg className="absolute text-blue-400 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <FaBookReader className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 1:</span> Best grades / score during schooling</h3>
                            <p className="mt-4 text-base text-gray-600">We provide this opportunity to someone who can achieve excellence in academics; hence, a good score is the most important. It shows your capability and the interest to learn and grow.</p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div variants={itemVariants}>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-orange-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                                </svg>
                                <svg className="absolute text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <GiReceiveMoney className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 2:</span> Hard financial situation</h3>
                            <p className="mt-4 text-base text-gray-600">We believe none of the talented minds should be left behind because of financial issues. So, we provide this opportunity to someone who has a hard financial situation and can make the most out of it.</p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div variants={itemVariants}>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-green-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                                </svg>
                                <svg className="absolute text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <GiBrain className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 3:</span> Great eagerness to learn</h3>
                            <p className="mt-4 text-base text-gray-600">We want to see the spark of the ability to dive into the world full of knowledge and dig the best ornaments that can decorate their life the best way.</p>
                        </motion.div>
                    </div>
                    <motion.button
                        className='mt-5 py-3 px-8 rounded-md text-white bg-red-400 hover:bg-red-500'
                        onClick={redirectForm}
                        variants={itemVariants}
                    >
                        Enroll Now
                    </motion.button>
                </div>
            </motion.section>

            {/* Procedure Section */}
            <motion.section
                className="py-10 bg-white sm:py-16 lg:py-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.h2
                            className={`text-3xl font-bold leading-tight text-red-400 sm:text-4xl lg:text-5xl ${styles.heading}`}
                            variants={itemVariants}
                        >
                            Procedure to get enrolled in the organization
                        </motion.h2>
                        <motion.p
                            className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600"
                            variants={itemVariants}
                        >
                            We give equal opportunities to all those in need
                        </motion.p>
                    </div>

                    <ul className="max-w-md mx-auto mt-16 space-y-12">
                        {procedureData.map((item, index) => (
                            <motion.li
                                className="relative flex items-start"
                                key={index}
                                variants={itemVariants}
                            >
                                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                    <div className='text-red-400 text-2xl'>{item.step}</div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-red-400">{item.title}</h3>
                                    <p className="mt-4 text-base text-gray-600">{item.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </>
    );
};

export default ProcedureComp;