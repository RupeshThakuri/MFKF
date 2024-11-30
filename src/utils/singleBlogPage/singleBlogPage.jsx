import React from 'react'
import Breadcrumbs from '@/breadcrumbs/breadcrumbs'
import Image from 'next/image'

//css
import style from "./singleBlog.module.css"

//import data components
import { blogData } from "@/components/Blog/blogData"

//icons
import { CiSearch } from "react-icons/ci";


function SingleBlogPage() {
    return (
        <>
            <Breadcrumbs title="Blog" />


            {/* section for single blog */}
            <section className="container mx-auto px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Blog main image */}
                    <div className="w-full">
                        <Image
                            src="/Image/pokhara.jpeg"
                            alt="Main Blog Image"
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Blog content 1*/}
                    <div className='mt-3 mb-3'>
                        <h1 className="text-3xl font-bold mb-2">
                            Astronomy Binoculars A Great Alternative
                        </h1>
                        <div className="text-gray-500 text-sm mb-4">
                            <p>Post: Technology | Date: October 30, 2024 | 12 Comments</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            MCSE boot camps have their supporters and detractors. Some people
                            do not understand why you should have to spend money on boot camp
                            when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Boot camps have their supporters and detractors. Some people do not
                            understand why you should have to spend money on boot camp when you
                            can get the MCSE study materials yourself at a fraction.
                        </p>
                    </div>

                    {/* Additional images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Image
                            src="/Image/pokhara.jpeg"
                            alt="Secondary Image 1"
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-lg"
                        />
                        <Image
                            src="/Image/pokhara.jpeg"
                            alt="Secondary Image 2"
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Blog content 2*/}
                    <div className='mt-3 mb-3'>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            MCSE boot camps have their supporters and detractors. Some people
                            do not understand why you should have to spend money on boot camp
                            when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Boot camps have their supporters and detractors. Some people do not
                            understand why you should have to spend money on boot camp when you
                            can get the MCSE study materials yourself at a fraction.
                        </p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-6 ml-3 p-4 bg-white h-fit">
                    {/* Author Card */}
                    <div className={`${style.search_blogs_heading}`}>
                        <h1 className="text-lg font-bold mb-2 text-red-400">
                            Search for Popular Blogs
                        </h1>
                        <div className={`${style.searchInput} text-white bg-red-400 py-2 px-4 flex justify-center items-center`}>
                            <input
                                type='text'
                                placeholder='Search for Popular blogs'
                                className='text-white bg-red-400 placeholder-white !placeholder-opacity-100 rounded-xl py-2 px-4 h-full w-full focus:outline-none'
                            />
                            <CiSearch className='text-2xl' />
                        </div>
                    </div>
                    <div className=" p-4 rounded-lg text-center">

                        <Image
                            src="/Image/rupesh.jpeg"
                            alt="Author"
                            width={100}
                            height={100}
                            className={`rounded-full mx-auto mb-4 ${style.authorCard}`}
                        />
                        <h3 className="text-lg font-bold">Charlie Barber</h3>
                        <p className="text-gray-500">Blogger & Writer</p>
                        <p className="text-gray-700 text-sm mt-2">
                            Boot camps have its supporters and its detractors. Some people do
                            not understand why you should have to spend money on boot camp.
                        </p>
                    </div>



                    {/* Popular Posts */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 w-full bg-red-400 px-3 py-2 text-white">Popular Posts</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-700">
                                {blogData
                                    .filter((item, index) => item.label === "famous")
                                    .map((item, index) => (
                                        <>
                                            <div className='card flex justify-center items-center mb-3' key={index}>
                                                <Image
                                                    src={item.img}
                                                    alt="Main Blog Image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <div className='content ml-3'>
                                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                                    <p className="text-sm text-gray-500">Post: {item.label} | Date: {item.dateMonth} {item.dateDay}, {item.dateYear} | See More</p>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                            </li>
                        </ul>
                    </div>

                </aside>
            </section>

        </>
    )
}

export default SingleBlogPage
