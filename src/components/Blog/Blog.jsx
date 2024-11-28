"use client"

import React, { useState } from 'react';
import Image from 'next/image';


//import css
import style from "./blog.module.css";

//icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


//data components
import { secData } from "./blgoSecData";
import { blogData } from "./blogData";
import { reviewData } from "./reviewData"


function Blog() {
    const [blogPerPage, setBlogPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    const firstItem = currentPage * blogPerPage;
    const lastItem = firstItem + blogPerPage;

    //for buttons 
    const numOfPage = Math.ceil(blogData.length / blogPerPage);
    const pages = [];

    for (let i = 0; i < numOfPage; i++) {
        pages.push(i + 1);
    }


    return (
        <>
            {/* Gallery or Blogs section */}
            <div className='section py-5 flex flex-col items-center justify-center lg:flex-row xl:flex-row'>
                {secData.map((item, index) => (
                    <>
                        <div className={`${style.imageCont} relative cursor-pointer m-7`} key={index}>
                            <div className='img '>
                                <Image
                                    src={item.imgSrc}
                                    alt="member"
                                    className={`${style.images} rounded-xl`}
                                    width={500}
                                    height={700} />
                            </div>
                            <div className={`${style.content} absolute top-1/2 text-center bg-red-400 h-26 p-2`}>
                                <h1 className={`text-white text-lg font-semibold ${style.heading}`}>{item.title}</h1>
                                <p className='font-mono text-gray-100'>{item.desc}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            {/* Blogs With Pagination */}
            <div className='blogs p-9 flex flex-col lg:flex-row xl:flex-row bg-white w-full'>
                {/* left section for */}
                <div className='left ml-3 lg:ml-5 xl:ml-12 lg:mr-2 xl:mr-2 w-full lg:w-3/4 xl:w-3/4 flexflex-col items-center justify-center '>
                    {blogData
                        .slice(firstItem, lastItem)
                        .map((item, index) => (
                            <>
                                <div className='blogCard flex items-center justify-center mt-7 flex-col lg:flex-row xl:flex-row' key={index}>
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
                                            <button className={`${style.seeMoreBtn} rounded-full text-red-400  px-6 hover:bg-red-400 hover:text-white`}> Read More</button>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))}

                    {/* Pagenation */}
                    <div className='pagenation bg-white px-12 py-9'>
                        <div className='page_btn flex justify-center items-center'>
                            <button>
                                <IoIosArrowBack className='mr-3' />
                            </button>
                            {pages.map((item, index) => (
                                <>
                                    <button className={`px-3 py-1 hover:bg-red-400 hover:text-white ${currentPage === item - 1 ? "bg-red-400 text-white" : ""}`} key={index} onClick={() => setCurrentPage(index)}>{item}</button>
                                </>
                            ))}
                            <button>
                                <IoIosArrowForward className='ml-3' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* right section for members perosnal experience */}
                <div className='memberReview bg-gray-200 mt-7 w-full lg:w-1/4 xl:w-1/4 h-fit'>
                    <div className='membRevContent flex flex-col justify-center items-center p-3'>
                        <h1 className={`${style.heading} font-bold text-lg text-red-400`}>Members Review</h1>
                        {reviewData.map((item, index) => (
                            <>
                                <div className='review_cont my-5 flex flex-col justify-center items-center' key={index}>
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
                                </div>
                                <p className={`${style.line} w-full bg-gray-400`}></p>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
