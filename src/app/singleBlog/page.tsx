import React, { Suspense } from 'react'
import SingleBlogPage from "@/utils/singleBlogPage/singleBlogPage"

function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SingleBlogPage />
      </Suspense>
    </div>
  )
}

export default page
