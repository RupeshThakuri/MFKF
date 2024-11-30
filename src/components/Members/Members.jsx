"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

//css
import styles from "./member.module.css"

//icons
import { FaArrowRight } from "react-icons/fa";


//importing components
import BlgoSecCom from "@/utils/BlogGallerySec/blgoSecCom"
import Breadcrumbs from '@/breadcrumbs/breadcrumbs'

//members data
import { membersData } from "./memberData"

function Members() {
    //to see more board members
    const [maxBoardMember,setMaxBoardMember] = useState(3)
    const [toogleBoardMembers,setToogleBoardMembers] = useState(false)


    const toogleBoardMem=()=>{
        setToogleBoardMembers(!toogleBoardMembers)
        if(toogleBoardMembers){
            setMaxBoardMember(3)
        }else{
            setMaxBoardMember(membersData.length)
        }
    }

    //to see more students / members
    const [maxMember,setMaxMember] = useState(3)
    const [toogleMembers,setToogleMembers] = useState(false)


    const toogleMem=()=>{
        setToogleMembers(!toogleBoardMembers)
        if(toogleMembers){
            setMaxMember(3)
        }else{
            setMaxMember(membersData.length)
        }
    }

    return (
        <>
            <Breadcrumbs title="Members" />

            {/* Redirecting cards for members and blogs */}
            <BlgoSecCom />


            {/* Gallery for members */}
            <div className='gallery w-full bg-white p-9 '>
                {/* Board Members Part */}
                <div className='boardMembersCont'>
                    <div className={`${styles.headings} top flex justify-between px-3 my-4`}>
                        <h1 className='font-bold text-lg'>Our Board Members</h1>
                        <div className={`${styles.seeMore} relative`}>
                            <p className='flex justify-center items-center cursor-pointer' onClick={()=>toogleBoardMem()}>
                                See More <FaArrowRight className='ml-2' />
                            </p>
                            <span className={`${styles.border} relative`}></span>
                        </div>
                    </div>
                    <div className='boardMembersCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                        {membersData
                            .filter((item) => item.member === "Board Member")
                            .slice(0, maxBoardMember)
                            .map((item, index) => (
                                <div
                                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-200"
                                    key={index}
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {item.name}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">{item.position}</p>
                                        </div>

                                        <div className="sm:shrink-0 flex justify-center items-center">
                                            <Image
                                                src="/Image/pratigya.jpg"
                                                alt="pratigya"
                                                width={400}
                                                height={400}
                                                className="h-16 w-16 object-cover rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6">
                                        <div className="flex flex-col-reverse">
                                            <dt className="text-sm font-medium text-gray-600">{item.date}</dt>
                                            <dd className="text-xs text-gray-500">Member Since</dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <dt className="text-sm font-medium text-gray-600">{item.member}</dt>
                                            <dd className="text-xs text-gray-500">Position</dd>
                                        </div>
                                    </dl>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Students Pard */}
                <div className='studentsCont'>
                    <div className={`${styles.headings} top flex justify-between px-3 my-4`}>
                        <h1 className='font-bold text-lg'>Our Students / Members</h1>
                        <div className={`${styles.seeMore} relative`}>
                            <p className='flex justify-center items-center cursor-pointer' onClick={()=>toogleMem()}>
                                See More <FaArrowRight className='ml-2' />
                            </p>
                            <span className={`${styles.border} relative`}></span>
                        </div>
                    </div>
                    <div className='boardMembersCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                        {membersData
                            .filter((item) => item.member === "Student")
                            .slice(0, maxMember)
                            .map((item, index) => (
                                <div
                                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-200"
                                    key={index}
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {item.name}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">{item.position}</p>
                                        </div>

                                        <div className="sm:shrink-0 flex justify-center items-center">
                                            <Image
                                                src="/Image/pratigya.jpg"
                                                alt="pratigya"
                                                width={400}
                                                height={400}
                                                className="h-16 w-16 object-cover rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-pretty text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <dl className="mt-6 flex gap-4 sm:gap-6">
                                        <div className="flex flex-col-reverse">
                                            <dt className="text-sm font-medium text-gray-600">{item.date}</dt>
                                            <dd className="text-xs text-gray-500">Member Since</dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <dt className="text-sm font-medium text-gray-600">{item.member}</dt>
                                            <dd className="text-xs text-gray-500">Position</dd>
                                        </div>
                                    </dl>
                                </div>
                            ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Members
