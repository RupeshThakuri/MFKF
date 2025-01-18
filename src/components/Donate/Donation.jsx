"use client"

import React, { useState } from 'react'
import Image from 'next/image'


//css
import style from "./donate.module.css"


//components
import MetaDonation from "./MetaDonation"

function Donation() {
    const [activeMetaPage, setActiveMetaPage] = useState(false);

    const redirectMetaDonate = () => {
        setActiveMetaPage(!activeMetaPage)
    }


    return (
        <>
            {activeMetaPage ?
                <MetaDonation />
                :
                <form>
                    <div className={`${style.donate} flex justify-center items-center my-10`}>
                        <div className={`${style.donate_head} bg-white flex flex-col justify-center w-2/3 py-8 px-5`}>
                            <div className={`${style.desc} flex flex-col justify-center items-center flex-wrap`}>
                                <h1 className='text-2xl'>Donate Now</h1>
                                <p>Your small help will surely bring big change is {`Someone's`} Life</p>
                            </div>
                            <div className='payment flex flex-col justify-center items-center mt-5'>
                                <p>You Can Make A Donation By Scanning Following QR Codes</p>
                                <div className='QR flex justify-center items-center flex-wrap'>
                                    <div className='Nepal'>
                                        <Image
                                            src={'/Image/QR.png'}
                                            width={300}
                                            height={400}
                                            alt='QR Code'
                                        />
                                        <h1><strong>{`Nepal's`} Board Member</strong></h1>
                                        <p>Scan only for Nepalese for donation</p>
                                        <p><strong>Name:</strong> Milan Dawan</p>
                                        <p><strong>Contact No:</strong> 123456789</p>
                                    </div>
                                    <div className='USA'>
                                        <Image
                                            src={'/Image/QR.png'}
                                            width={300}
                                            height={400}
                                            alt='QR Code'
                                        />
                                        <h1><strong>{`Americas's`} Founder And CEO</strong></h1>
                                        <p>Scan only for Americans for donation</p>
                                        <p><strong>Name:</strong> Amy Simpher</p>
                                        <p><strong>Contact No:</strong> 123456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='beta flex justify-center items-center'>
                        <button className='bg-red-500 text-white py-2 px-5 rounded-full' onClick={() => redirectMetaDonate()}> See our Beta Donation Version</button>
                    </div>
                </form>
            }
        </>
    )
}

export default Donation
