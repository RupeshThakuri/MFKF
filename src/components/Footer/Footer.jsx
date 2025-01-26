"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import style from "./footer.module.css";

function Footer() {
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
            <footer className="w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Grid */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Logo and Description */}
                        <motion.div
                            className="col-span-full mb-10 lg:col-span-2 lg:mb-0"
                            variants={itemVariants}
                        >
                            <Link href="/home" className="flex flex-col justify-center lg:justify-start">
                                <Image src="/Image/logo.png" alt="" width={100} height={100} />
                                <p className={`${style.orgName} text-red-500 font-bold`}>Many Faces Of Karma Foundation</p>
                            </Link>
                            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                                Deserved ones will get it, Undeserved ones will lose it.
                            </p>
                            <Link
                                href="/contact"
                                className="py-2.5 px-5 h-9 block w-fit bg-red-400 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-red-600 lg:mx-0"
                            >
                                Contact us
                            </Link>
                        </motion.div>

                        {/* MFKF Links */}
                        <motion.div
                            className="lg:mx-auto text-left"
                            variants={itemVariants}
                        >
                            <h4 className="text-lg text-gray-900 font-medium mb-7">MFKF</h4>
                            <ul className="text-sm transition-all duration-500">
                                <li className="mb-6">
                                    <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                                </li>
                                <li className="mb-6">
                                    <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                                </li>
                                <li>
                                    <Link href="/procedure" className="text-gray-600 hover:text-gray-900">Procedure</Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Blogs Links */}
                        <motion.div
                            className="lg:mx-auto text-left"
                            variants={itemVariants}
                        >
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                            <ul className="text-sm transition-all duration-500">
                                <li className="mb-6">
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Education</Link>
                                </li>
                                <li className="mb-6">
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Leadership Program</Link>
                                </li>
                                <li>
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Exploration / Education Tour</Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Support Links */}
                        <motion.div
                            className="lg:mx-auto text-left"
                            variants={itemVariants}
                        >
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                            <ul className="text-sm transition-all duration-500">
                                <li className="mb-6">
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Phone: +977 11111111</Link>
                                </li>
                                <li className="mb-6">
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Email: 0i0wY@example.com</Link>
                                </li>
                                <li>
                                    <Link href="javascript:;" className="text-gray-600 hover:text-gray-900">Website: www.mfkf.org</Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Donate Section */}
                        <motion.div
                            className="lg:mx-auto text-left"
                            variants={itemVariants}
                        >
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Donate</h4>
                            <p className="text-sm text-gray-500 leading-6 mb-7">
                                {`Donate to make a positive impact in someone's life`}
                            </p>
                            <Link
                                href="/donate"
                                className="flex items-center justify-center gap-2 border border-red-400 rounded-full py-3 px-6 w-fit lg:mx-0 text-sm text-red-400 font-semibold transition-all duration-500 hover:bg-indigo-50"
                            >
                                Donate
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#EB8661" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Footer Bottom */}
                    <motion.div
                        className="py-7 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-gray-500">
                                ©<a href="https://pagedone.io/">MFKF</a> 2024, All rights reserved.
                            </span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                                <Link
                                    href="javascript:;"
                                    className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF] hover:bg-gray-900"
                                >
                                    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </>
    );
}

export default Footer;