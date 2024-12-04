"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


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
    const redirectSinglePage =(item) => {
        const query = new URLSearchParams(item).toString();
        router.push(
            `/singleBlog?title=${encodeURIComponent(item.title)}&label=${encodeURIComponent(item.label)}&dateMonth=${encodeURIComponent(item.dateMonth)}&dateDay=${encodeURIComponent(item.dateDay)}&dateYear=${encodeURIComponent(item.dateYear)}&img=${encodeURIComponent(item.img)}`
        ); 
    }


    return (
        <>
            {/* Gallery or Blogs section */}
            <BlgoSecCom />

            {/* Blogs With Pagination */}
            <div className='blogs p-9 flex flex-col lg:flex-row xl:flex-row bg-white w-full'>
                {/* left section for */}
                <div className='left ml-1 lg:ml-5 xl:ml-12 lg:mr-2 xl:mr-2 w-full lg:w-3/4 xl:w-3/4 flexflex-col items-center justify-center '>
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
                                            <button className={`${style.seeMoreBtn} rounded-full text-red-400  px-6 hover:bg-red-400 hover:text-white`} onClick={() => redirectSinglePage(item)}> Read More</button>
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
