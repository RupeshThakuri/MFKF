import React from 'react'
import Members from "@/components/Members/Members"
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "MFKF - Members Page",
  description: "The Pillars Of The Organization",
};


function page() {
  return (
    <>
        <Members/>
    </>
  )
}

export default page
