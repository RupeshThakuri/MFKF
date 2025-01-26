"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

// Data
import { leadershipData } from "./leadershipData";
import { blogData } from "../Blog/blogData";

// Styles
import styles from "./leadership.module.css";

function Leadership() {
    const [activeIndex, setActiveIndex] = useState(leadershipData.findIndex((item) => item.active === true));
    const router = useRouter();

    // Functions to determine left and right index
    const getLeftIndex = () => (activeIndex - 1 + leadershipData.length) % leadershipData.length;
    const getRightIndex = () => (activeIndex + 1) % leadershipData.length;

    // Clicking "See More" opens a single blog
    const redirectSinglePage = (item) => {
        router.push(
            `/singleBlog?title=${encodeURIComponent(item.title)}&label=${encodeURIComponent(item.label)}&dateMonth=${encodeURIComponent(item.dateMonth)}&dateDay=${encodeURIComponent(item.dateDay)}&dateYear=${encodeURIComponent(item.dateYear)}&img=${encodeURIComponent(item.img)}`
        );
    };

    // Animation variants for the slider
    const sliderVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.8 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, scale: 0.8 },
    };

    // Animation variants for blog cards
    const blogVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <Breadcrumbs title="Leadership Program" />

            {/* Leadership Program Image Slider */}
            <div className='leadership bg-gray-100'>
                <div className='flex flex-col justify-center items-center py-12'>
                    <div className='slider flex justify-around items-center'>
                        <button className='text-3xl' onClick={() => setActiveIndex(getLeftIndex())}>
                            <IoIosArrowBack />
                        </button>

                        <div className='images flex gap-x-8 justify-center items-center relative w-[800px] h-[400px]'>
                            {/* Left Side Image */}
                            <motion.div
                                className='side_img absolute left-0 transform -translate-x-1/2'
                                initial={{ opacity: 0.5, scale: 0.8, x: -100 }}
                                animate={{ opacity: 0.5, scale: 0.8, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={leadershipData[getLeftIndex()].imgSrc}
                                    alt=""
                                    height={300}
                                    width={300}
                                    className='rounded-md'
                                />
                            </motion.div>

                            {/* Center Image */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    className='center_img absolute'
                                    variants={sliderVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <Image
                                        src={leadershipData[activeIndex].imgSrc}
                                        alt=""
                                        height={500}
                                        width={500}
                                        className='rounded-md'
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Right Side Image */}
                            <motion.div
                                className='side_img absolute right-0 transform translate-x-1/2'
                                initial={{ opacity: 0.5, scale: 0.8, x: 100 }}
                                animate={{ opacity: 0.5, scale: 0.8, x: 100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={leadershipData[getRightIndex()].imgSrc}
                                    alt=""
                                    height={300}
                                    width={300}
                                    className='rounded-md'
                                />
                            </motion.div>
                        </div>

                        <button className='text-3xl' onClick={() => setActiveIndex(getRightIndex())}>
                            <IoIosArrowForward />
                        </button>
                    </div>

                    {/* Descriptions */}
                    <div className="descriptions w-3/4 text-center sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-10">
                        <div className='titles'>
                            <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                                {leadershipData[activeIndex].title}
                            </h1>
                            <h2 className='font-bold text-red-400'>{leadershipData[activeIndex].subTitle}</h2>
                        </div>
                        <div className='desc text-justify lg:text-center xl:text-center'>
                            <p>{leadershipData[activeIndex].desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Program Blogs Section */}
            <div className={`${styles.blogs} bg-white text-red-400 p-8 lg:p-12 xl:p-12`}>
                <div className='top flex justify-between px-3'>
                    <h1 className='font-bold text-lg'>Our Latest Blogs</h1>
                    <div className={`${styles.seeMore} relative`}>
                        <Link href={"/blogs"} className='flex justify-center items-center'>
                            See More <FaArrowRight className='ml-2' />
                        </Link>
                        <span className={`${styles.border} relative`}></span>
                    </div>
                </div>

                <div className='blogData flex flex-col justify-center items-center'>
                    {blogData
                        .filter((item) => item.label === "latest")
                        .map((item, index) => (
                            <motion.article
                                key={index}
                                className="flex bg-red-400 transition hover:shadow-xl mt-6 flex-col lg:flex-row xl:flex-row w-full md:w-2/3 lg:w-2/3 xl:w-2/3"
                                variants={blogVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className="lg:rotate-180 p-2 lg:[writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                                    >
                                        <span>{item.dateYear}</span>
                                        <span className="w-px flex-1 bg-gray-900/10"></span>
                                        <span>{item.dateMonth} {item.dateDay}</span>
                                    </time>
                                </div>

                                <div>
                                    <Image
                                        alt=""
                                        src={item.img}
                                        className="aspect-square h-full w-full object-cover"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-white">
                                                {item.title}
                                            </h3>
                                        </a>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-gray-200 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-gray-400"
                                            onClick={() => redirectSinglePage(item)}
                                        >
                                            Read Blog
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Leadership;