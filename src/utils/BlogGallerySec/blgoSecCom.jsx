"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

//import css
import style from "./blogGallerySec.module.css";

//data components
import { secData } from './blgoSecData';

function BlgoSecCom() {
    //redirect
    const router = useRouter();
    const redirectPage = (path) => {
        router.push(path);
    }

    return (
        <>
            {/* Gallery or Blogs section */}
            <div className='section py-5 flex flex-col items-center justify-center lg:flex-row xl:flex-row'>
                {secData.map((item, index) => (
                    <>
                        <div className={`${style.imageCont} relative cursor-pointer m-7`} key={index} onClick={() => redirectPage(item.path)}>
                            <div className='img '>
                                <Image
                                    src={item.imgSrc}
                                    alt="member"
                                    className={`${style.images} rounded-xl`}
                                    width={300}
                                    height={300} />
                            </div>
                            <div className={`${style.content} absolute top-1/2 text-center bg-red-400 h-26 p-2`}>
                                <h1 className={`text-white text-lg font-semibold ${style.heading}`}>{item.title}</h1>
                                <p className='font-mono text-gray-100'>{item.desc}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default BlgoSecCom
