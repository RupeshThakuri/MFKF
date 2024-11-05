"use client"

import { React } from 'react'
import style from "./sidebar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'

//icons
import { IoMdClose } from "react-icons/io";
import { IoNavigate } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


//import navItems
import { menuItems } from "./menuData"

//extra import
import { Box, ButtonBase } from "@mui/material";

const SideBar = ({ openSideBar, setOpen }) => {

  return (
    <>
      <section className={`${style.sidebar} w-full h-screen p-9 ${openSideBar ? null : `${style.close_sidebar}`} z-50`}>
        <div className='top flex justify-between items-center'>
          <div className='logo flex justify-center items-center flex-col'>
            <Image width={100} height={100} src="/Image/logo.png" alt="logo" />
            <div className='foundation_name'>
              <h2 className='font-bold'>MFKF</h2>
            </div>
          </div>
          <div className={`${style.close} text-3xl`}>
            <button onClick={() => setOpen(false)}>
              <IoMdClose className='bg-red-500 h-9 w-9 p-1 rounded-full hover:bg-white' />
            </button>
          </div>
        </div>
        <div className='sec_mid'>
          <div className={`${style.navItem_container} my-1`}>
            <Box className={`p-3 flex flex-col gap-y-4 lg:hidden xl:hidden`}>
              {menuItems && menuItems.map((item, i) => (
                <Link
                  key={i}
                  activeClass={style.active}
                  href={item.path}
                  className={`mx-2 ${style.navItems}`}
                >
                  <ButtonBase className='gap-x-2'>
                    {item.icons}
                    {item.title}
                  </ButtonBase>
                </Link>
              ))}
            </Box>
          </div>
          <div className='mid mt-4 hidden lg:block xl:block'>
            <p className='text-justify px-3'>
              Many Faces Of Karma Foundation (MFKF) empowers financially challenged students by providing access to quality education
              and essential support. We guide them in discovering career paths, fostering leadership, and building resilience through programs,
              workshops, and field trips. At MFKF,
              we’re dedicated to nurturing future leaders ready to make a positive impact—one student at a time.
            </p>
          </div>
        </div>
        <div className='contact px-3 mt-2'>
          <ul className='flex flex-col gap-y-3'>
            <li className='flex items-center'><IoNavigate className='text-3xl text-red-600' /><p className='ml-2'>171/5, Borhanpur Lane, ABC</p></li>
            <li><Link href="gmail.com" className='flex items-center'><IoIosMail className='text-3xl text-red-600' /><p className='ml-2'>abc@MFKF.com</p></Link> </li>
            <li><Link href="" className='flex items-center'><FaPhoneAlt className='text-2xl text-red-600' /><p className='ml-2'>+880 1552-938771</p> </Link></li>
          </ul>
        </div>
        <div className='contact_btn mt-6 px-3'>
          <Button className='bg-red-400 text-black hover:bg-red-500'>Contact Us</Button>
        </div>
      </section>
    </>
  )
}

export default SideBar
