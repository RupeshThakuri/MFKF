import React, { Suspense } from 'react'
import Leadership from "@/components/Leadership/Leadership";
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "MFKF - Leadership Page",
  description: "Shine With Your Leadership",
};

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Leadership />
      </Suspense>
    </>
  )
}

export default page
