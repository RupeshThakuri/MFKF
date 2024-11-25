import React from 'react';
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';
import Image from 'next/image';

//icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Leadership() {
    return (
        <>
            <Breadcrumbs title="Leadership Program" />
            <div className='leadership bg-white'>
                <div className='flex flex-col justify-center items-center py-12'>
                    <div className='slider flex justify-around'>
                        <button className='text-3xl'>
                            <IoIosArrowBack />
                        </button>
                        <div className='images flex gap-x-8 justify-center items-center'>
                            <div className='side_img h-1/2 hidden lg:block xl:block'>
                                <Image src="/Image/ledership.jpeg" alt="" height={300} width={300} />
                            </div>
                            <div className='center_img'>
                                <Image src="/Image/ledership.jpeg" alt="" height={500} width={500} />
                            </div>
                            <div className='side_img h-1/2 hidden lg:block xl:block'>
                                <Image src="/Image/ledership.jpeg" alt="" height={300} width={300} />
                            </div>
                        </div>
                        <button>
                            <IoIosArrowForward className='text-3xl' />
                        </button>
                    </div>
                    <div className="descriptions w-3/4 text-center sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-10">
                        <div className='titles'>
                            <h1 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
                                Educating About Career Opportunities
                            </h1>
                            <h2 className='font-bold text-red-400'>Shree Sharswarti Secondary School, Bungtang-Nuwakot</h2>
                        </div>
                        <div className='desc text-justify lg:text-center xl:text-center'>
                            <p>The students of the MFKF provides some insights about different carrear Oppurtunities they can choose after their shcooling. Each members show theri leadership quality fearlessly infront of about 50 and more students from grade 6 to 10 including some seniors teachers as well.
                                It shows the leadership quality in them each of the MFKF`s members proving why they were choosen by the foundation. They provide what they have learnt
                                being the member of the foundation making all of us proud.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leadership
