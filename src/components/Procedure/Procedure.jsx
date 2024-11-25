import React from 'react'
import styles from "./procedure.module.css"
import Breadcrumbs from '@/breadcrumbs/breadcrumbs'

//icons
import { FaBookReader } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

//data
import { procedureData } from "./procedureData"

const ProcedureComp = () => {
    return (
        <>

            <Breadcrumbs title={"Procedure"} />
            <section className="py-10  bg-gray-100 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h2 className={`text-3xl font-bold leading-tight text-red-400 sm:text-4xl lg:text-5xl ${styles.heading}`}>Requirements / Conditions </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Following Requirements should be fulfilled to be eligible for the program</p>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-blue-100" width="72" height="75" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                                </svg>
                                <svg className="absolute text-blue-400 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <FaBookReader className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 1:</span> Best grades / score during schooling</h3>
                            <p className="mt-4 text-base text-gray-600">We provide this oppurtunites to someone who can achieve excellence in academics hence  a good score is the most. It shows your capability and the intrest to learn and grow.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-orange-100" width="62" height="64" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                                </svg>
                                <svg className="absolute text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <GiReceiveMoney className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 2:</span> Hard financial situation</h3>
                            <p className="mt-4 text-base text-gray-600">We beleive none of the talented minds should be left behind cause of financial issues. So, we provide this oppurtunites to someone who have hard financial situation and use this most out of the oppurtunites.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-green-100" width="66" height="68" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                                </svg>
                                <svg className="absolute text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <GiBrain className={`${styles.icon}`} />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-red-400"><span className='text-black'>Step 3: </span>Great eagerness to learn</h3>
                            <p className="mt-4 text-base text-gray-600">We want to see the spark of the ability to dive into the world full of knwledge and dig the best ornaments that can decore their life the best way.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedure section */}
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className={`text-3xl font-bold leading-tight text-red-400 sm:text-4xl lg:text-5xl ${styles.heading}`}>Procedure to get enrolled to the organization</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">We give equal oppurtunites to all those in need</p>
                    </div>

                    <ul className="max-w-md mx-auto mt-16 space-y-12">
                        {procedureData.map((item, index) => (
                            <>
                                <li className="relative flex items-start" key={index}>
                                    <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                                    <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                        <div className='text-red-400 text-2xl'>{item.step}</div>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-red-400">{item.title}</h3>
                                        <p className="mt-4 text-base text-gray-600">{item.description}</p>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </section>

        </>
    )
}

export default ProcedureComp
