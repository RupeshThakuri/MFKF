"use client"

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

//import css
import style from "./blog.module.css";

//icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

//data components
import { blogData } from "./blogData";
import { reviewData } from "./reviewData"
import BlgoSecCom from "@/utils/BlogGallerySec/blgoSecCom"

function Blog() {
    const blogPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const firstItem = currentPage * blogPerPage;
    const lastItem = firstItem + blogPerPage;

    //for buttons 
    const numOfPage = Math.ceil(blogData.length / blogPerPage);
    const pages = [];

    for (let i = 0; i < numOfPage; i++) {
        pages.push(i + 1);
    }

    //redirecting to single Blog page with the item value 
    const router = useRouter();
    const redirectSinglePage = (item) => {
        router.push(
            `/singleBlog?title=${encodeURIComponent(item.title)}&label=${encodeURIComponent(item.label)}&dateMonth=${encodeURIComponent(item.dateMonth)}&dateDay=${encodeURIComponent(item.dateDay)}&dateYear=${encodeURIComponent(item.dateYear)}&img=${encodeURIComponent(item.img)}`
        );
    }

    // Ref for the blog section
    const blogSectionRef = useRef(null);

    // Function to handle pagination and scroll to the blog section
    const handlePagination = (pageIndex) => {
        setCurrentPage(pageIndex); // Update the current page
        // Scroll to the blog section
        if (blogSectionRef.current) {
            blogSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const blogCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const reviewCardVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const paginationButtonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Gallery or Blogs section */}
            <BlgoSecCom />

            {/* Blogs With Pagination */}
            <div ref={blogSectionRef} className='blogs p-9 flex flex-col lg:flex-row xl:flex-row bg-white w-full'>
                {/* left section for blogs */}
                <div className='left ml-1 lg:ml-5 xl:ml-12 lg:mr-2 xl:mr-2 w-full lg:w-3/4 xl:w-3/4 flex flex-col items-center justify-center'>
                    <AnimatePresence mode='wait'>
                        {blogData
                            .slice(firstItem, lastItem)
                            .map((item, index) => (
                                <motion.div
                                    className='blogCard flex items-center justify-center mt-7 flex-col lg:flex-row xl:flex-row'
                                    key={item.title} // Use a unique key for each blog card
                                    variants={blogCardVariants}
                                    initial="hidden"
                                    whileInView="visible" // Animate when in view
                                    viewport={{ once: true, amount: 0.5 }} // Trigger animation only once and when 50% of the element is visible
                                    exit="hidden" // Fade out when leaving
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className='left_top mr-6 mb-3 float-right w-full lg:w-28 xl:w-36'>
                                        <h1 className={`${style.heading} font-bold text-lg text-red-400`}>{item.title}</h1>
                                        <p className='text-blue-300'>{item.label}</p>
                                        <p>{item.dateMonth} {item.dateDay}, {item.dateYear} </p>
                                    </div>
                                    <div className='right'>
                                        <div className='blogImg'>
                                            <Image
                                                src={item.img}
                                                alt="member"
                                                className={`${style.blogImg} rounded-xl`}
                                                width={900}
                                                height={800}
                                            />
                                        </div>
                                        <div className={`${style.blogContent} mt-5 leading-10`}>
                                            <h1 className='font-bold text-3xl'>{item.title}</h1>
                                            <p className='text-gray-500 leading-8'>{item.desc}</p>
                                            <button className={`${style.seeMoreBtn} rounded-full text-red-400  px-6 hover:bg-red-400 hover:text-white`} onClick={() => redirectSinglePage(item)}> Read More</button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>

                    {/* Pagination */}
                    <motion.div
                        className='pagenation bg-white px-12 py-9'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                    >
                        <div className='page_btn flex justify-center items-center'>
                            <motion.button
                                whileHover="hover"
                                variants={paginationButtonVariants}
                                onClick={() => {
                                    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
                                    if (blogSectionRef.current) {
                                        blogSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                <IoIosArrowBack className='mr-3' />
                            </motion.button>
                            {pages.map((item, index) => (
                                <motion.button
                                    key={index}
                                    className={`px-3 py-1 hover:bg-red-400 hover:text-white ${currentPage === index ? "bg-red-400 text-white" : ""}`}
                                    onClick={() => handlePagination(index)}
                                    whileHover="hover"
                                    variants={paginationButtonVariants}
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <motion.button
                                whileHover="hover"
                                variants={paginationButtonVariants}
                                onClick={() => {
                                    setCurrentPage((prev) => (prev < numOfPage - 1 ? prev + 1 : prev));
                                    if (blogSectionRef.current) {
                                        blogSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                <IoIosArrowForward className='ml-3' />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* right section for members' personal experience */}
                <div className='memberReview bg-gray-200 mt-7 w-full lg:w-1/4 xl:w-1/4 h-fit'>
                    <div className='membRevContent flex flex-col justify-center items-center p-3'>
                        <h1 className={`${style.heading} font-bold text-lg text-red-400`}>Members Review</h1>
                        {reviewData.map((item, index) => (
                            <motion.div
                                className='review_cont my-5 flex flex-col justify-center items-center'
                                key={index}
                                variants={reviewCardVariants}
                                initial="hidden"
                                whileInView="visible" // Animate when in view
                                viewport={{ once: true, amount: 0.5 }} // Trigger animation only once and when 50% of the element is visible
                                transition={{ delay: index * 0.2 }}
                            >
                                <Image
                                    src={item.imgSrc}
                                    width={200}
                                    height={100}
                                    className={`rounded-full ${style.reveiewImg}`}
                                    alt='member'
                                />
                                <div className='content flex justify-center items-center flex-col leading-7 mt-3'>
                                    <p className='text-red-400'>{item.stdName}</p>
                                    <p className='italic'>{item.role}</p>
                                    <p className='text-blue-400'>{item.eventName}</p>
                                    <p className='leading-6 mx-2 text-gray-600 text-justify'>{item.review}</p>
                                </div>
                                <p className={`${style.line} w-full bg-gray-400`}></p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog