"use client"
import style from "./sidebar.module.css"
import Image from "next/image"
import Link from "next/link"
import { Button,Box, ButtonBase } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

//icons
import { IoMdClose,IoIosMail } from "react-icons/io"
import { IoNavigate } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"

//import navItems
import { menuItems } from "./menuData"

const SideBar = ({ openSideBar, setOpen }) => {
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 200, damping: 25 } },
  }

  const contentVariants = {
    open: { opacity: 1, transition: { delay: 1, duration: 1 } }, // Delay for content to appear
    closed: { opacity: 0, transition: { duration: 0.2 } },
  }

  // Get the current pathname for active state
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {openSideBar && (
        <motion.div
          className={`${style.sidebar} w-full h-screen p-9 z-50 fixed right-0`}
          initial="closed"
          animate={openSideBar ? "open" : "closed"}
          exit="closed"
          variants={sidebarVariants}
        >
          <motion.div
            className="h-full"
            initial="closed"
            animate={openSideBar ? "open" : "closed"}
            exit="closed"
            variants={contentVariants}
          >
            <div className="top flex justify-between items-center">
              <div className="logo flex justify-center items-center flex-col">
                <Image width={100} height={100} src="/Image/logo.png" alt="logo" />
                <div className="foundation_name">
                  <h2 className="font-bold">MFKF</h2>
                </div>
              </div>
              <div className={`${style.close} text-3xl`}>
                <button onClick={() => setOpen(false)}>
                  <IoMdClose className="bg-red-500 h-9 w-9 p-1 rounded-full hover:bg-white" />
                </button>
              </div>
            </div>
            <div className="sec_mid">
              <div className={`${style.navItem_container} my-1`}>
                <Box className={`p-3 flex flex-col gap-y-4 lg:hidden xl:hidden`}>
                  {menuItems &&
                    menuItems.map((item, i) => {
                      // Check if this item's path matches the current pathname
                      const isActive = item.path === pathname

                      return (
                        <Link
                          key={i}
                          href={item.path}
                          className={`mx-2 ${style.navItems}`}
                          onClick={() => setOpen(false)}
                        >
                          <ButtonBase className={`gap-x-2 ${isActive ? "text-red-500" : ""}`}>
                            {item.icons}
                            {item.title}
                          </ButtonBase>
                        </Link>
                      )
                    })}
                </Box>
              </div>
              <div className="mid mt-4 hidden lg:block xl:block">
                <p className="text-justify px-3">
                  {`Many Faces Of Karma Foundation (MFKF) empowers financially challenged students by providing access to
                  quality education and essential support. We guide them in discovering career paths, fostering
                  leadership, and building resilience through programs, workshops, and field trips. At MFKF, we're
                  dedicated to nurturing future leaders ready to make a positive impact—one student at a time.`}
                </p>
              </div>
            </div>
            <div className="contact px-3 mt-2">
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center">
                  <IoNavigate className="text-3xl text-red-600" />
                  <p className="ml-2">171/5, Borhanpur Lane, ABC</p>
                </li>
                <li>
                  <Link href="gmail.com" className="flex items-center">
                    <IoIosMail className="text-3xl text-red-600" />
                    <p className="ml-2">abc@MFKF.com</p>
                  </Link>{" "}
                </li>
                <li>
                  <Link href="" className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-red-600" />
                    <p className="ml-2">+880 1552-938771</p>{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact_btn mt-6 px-3">
              <Button className="bg-red-400  hover:bg-red-500 text-white">Contact Us</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SideBar
