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
            <div className='section flex flex-col items-center justify-around flex-wrap lg:flex-row xl:flex-row'>
                {secData.map((item, index) => (
                    <>
                        <div className={` overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 my-5 cursor-pointer`} key={index} onClick={()=>redirectPage(item.path)}>
                            {/*  <!--  Image --> */}
                            <figure>
                                <Image
                                    src={item.imgSrc}
                                    alt="secBg"
                                    width={300}
                                    height={400}
                                    className={`w-full h-full object-cover ${style.images}`}
                                />
                            </figure>
                            {/*  <!-- Body--> */}
                            <div className={`${style.content} p-6`}>
                                <header className="">
                                    <h3 className="text-xl font-medium text-slate-700">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </header>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default BlgoSecCom
