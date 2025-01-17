import React from 'react'
import Procedure from "./procedure"
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "MFKF - Procedure Page",
  description: "Your First Step",
};

function page() {
  return (
    <>
      <Procedure/>
    </>
  )
}

export default page
