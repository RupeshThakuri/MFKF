import React from 'react'
import Donation from '@/components/Donate/Donation'
import { Metadata } from 'next';


export const metadata:Metadata = {
    title: "MFKF - Dontate Page",
    description: "Help without expecting any return",
};


function page() {
    return (
        <div>
            <Donation />
        </div>
    )
}

export default page
