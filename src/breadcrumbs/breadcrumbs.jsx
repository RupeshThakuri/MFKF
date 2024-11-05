import React from 'react'
import style from "./breadcrumb.module.css"


function Breadcrumbs({title}) {
    return (
        <>
            <div className={`${style.breadcrumb} h-90 w-full flex flex-col justify-center items-start px-24`}
                style={{
                    backgroundImage: `url('/Image/secBg.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h2 className='text-white font-bold text-xl lg:text-6xl xd:text-6xl'>{title}</h2>
                <br />
                <p className={`text-red-400 font-medium text-xl ${style.org_name}`}>Many Faces Of Karma Foundation (MFKF)</p>
            </div>
        </>
    )
}

export default Breadcrumbs
