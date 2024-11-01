"use client"

import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Image from "next/image"

// Import data or module
import {GalleryData} from "./GalleryData"

export default function Gallery() {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,
      autoplay: 4500,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      <div className="glide-08 relative w-full overflow-hidden">
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
            {GalleryData.map((data, index) => (
              <li key={index}> 
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg h-90">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                    <Image
                      src={data.src}
                      alt="card-image"
                      className="!h-80 sm:h-52 md:h-60 w-full rounded-md md:rounded-lg object-cover"
                      height={200}
                      width={300}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-fit text-center">{data.event}</div>
                    <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                      {data.heading}
                    </h4>
                    <p className="mb-8 text-slate-600 leading-normal font-light">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
