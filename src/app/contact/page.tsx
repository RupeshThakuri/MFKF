import React from 'react'
import Contact from './Contact'
import { Metadata } from 'next';


export const metadata:Metadata = {
  title: "MFKF - Contact Page",
  description: "Reach Out For Any Query",
};

function page() {
  return (
    <>
      <Contact/>
    </>
  )
}

export default page
