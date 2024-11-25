import React from 'react'
import style from "./about.module.css"
import Image from 'next/image'
import {plans} from "./aboutData"
import Breadcrumbs from "@/breadcrumbs/breadcrumbs"

function About() {
    return (
        <>
            <>
                <Breadcrumbs title="About" />
                <div className="divide-y divide-gray-200 lg:px-52 lg:py-12 xl:px-52 xl:py-12 px-20 text-justify">
                    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            Our founder
                        </h1>
                    </div>
                    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                        <div className="flex flex-col items-center space-x-2 pt-8">
                            <Image
                                src={"/Image/Amy.jpeg"}
                                alt="avatar"
                                width={192}
                                height={192}
                                className="h-48 w-48 rounded-full"
                            />
                            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Amy Simper</h3>
                            <div className="text-gray-500 ">Occupation</div>
                            <div className="text-gray-500 ">Company</div>
                            <div className="flex space-x-3 pt-6">
                                <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 ">
                                    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="prose max-w-none pb-8 pt-8 xl:col-span-2 ">
                            <p>As the founder of Many Faces of Karma Foundation (MFKF), I was driven by a vision to bridge the gap in educational
                                opportunities for students who face financial hardships. I founded this organization because I firmly
                                believe that every child deserves the chance to realize their dreams, regardless of their background or circumstances.
                                Many young people, especially those from financially challenged families, possess immense potential and ambition but are
                                hindered by a lack of resources and guidance. At MFKF, we seek to provide not only financial assistance but also career
                                mentorship and developmental programs, fostering the skills and confidence these students need to excel.
                            </p>
                            <br />
                            <p>
                                Our motto, Empowering dreams, igniting potential, encapsulates our purpose. We are dedicated to empowering students to recognize
                                their own strengths, inspiring them to pursue their aspirations with resilience and
                                determination. Through field trips, educational tours, and leadership activities, we expose them to
                                experiences that broaden their perspectives and inspire lifelong growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-gray-50 w-full">
                    <h2 className="text-red-400 font-semibold">Our Objectives</h2>
                    <h3 className="text-2xl font-bold mt-2 mb-6">
                        <span className="whitespace-nowrap">MFKF Always</span> Focuses on Fulfiling Following Objectives
                    </h3>
                    <div className="space-y-8">
                        {plans.map((plan) => (
                            <div key={plan.id} className="flex items-start w-96">
                                <div className={`${style.id} w-32 h-10 bg-red-400 text-white rounded-full flex items-center justify-center text-lg font-semibold mr-4`}>
                                    {plan.id}
                                </div>
                                <div className="text-left">
                                    <h4 className="text-xl font-semibold">{plan.title}</h4>
                                    <p className="text-gray-600 mt-2">{plan.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </>
    )
}

export default About
