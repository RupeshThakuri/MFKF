import React, { useState } from "react"

export default function RadioBtn() {
  const [selectedOption, setSelectedOption] = useState(null)

  const onValueChange = e => {
    setSelectedOption(e.target.value)
  }

  return (
    <>
      {/*<!-- Component: Secondary checkboxes --> */}
      <fieldset className="flex gap-10">
        <div className="relative flex items-center mb-6">
          <input
            className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="radio"
            value="huey2"
            id="huey2"
            name="drone2"
            onChange={onValueChange}
          />
          <label
            className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            for="huey2"
          >
            Credit Card
          </label>
          <svg
            className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-emerald-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-emerald-600 peer-focus:fill-emerald-700 peer-disabled:cursor-not-allowed"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="title-04 description-04"
            role="graphics-symbol"
          >
            <title id="title-04">Circle Shape</title>
            <desc id="description-04">
              Circle shape to indicate whether the radio input is checked or
              not.
            </desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>
        <div className="relative flex items-center mb-6">
          <input
            className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="radio"
            value="dewey2"
            id="dewey2"
            name="drone2"
            onChange={onValueChange}
          />
          <label
            className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            for="dewey2"
          >
            PayPal
          </label>
          <svg
            className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-emerald-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-emerald-600 peer-focus:fill-emerald-700 peer-disabled:cursor-not-allowed"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="title-05 description-05"
            role="graphics-symbol"
          >
            <title id="title-05">Circle Shape</title>
            <desc id="description-05">
              Circle shape to indicate whether the radio input is checked or
              not.
            </desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>
      </fieldset>
      {/*<!-- End Secondary checkboxes --> */}
    </>
  )
}