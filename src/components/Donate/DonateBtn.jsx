import React from "react"

export default function DonateBtn() {
  return (
    <>
      {/*<!-- Component: Large primary basic button --> */}
      <button className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
        <span>Donate Now</span>
      </button>
      {/*<!-- End Large primary basic button --> */}
    </>
  )
}
