import React, { Suspense } from 'react'
import Leadership from "@/components/Leadership/Leadership";


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
