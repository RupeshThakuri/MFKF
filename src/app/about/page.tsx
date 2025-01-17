import React from 'react'
import About from "./about"
import { Metadata } from 'next';


export const metadata:Metadata = {
  title: "MFKF - About Page",
  description: "What MFKF Stands For",
};

function page() {
  return (
    <>
        <About/>
    </>
  )
}

export default page
