"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import style from "./header.module.css"
import SideBar from "./SideBar"
import { IoArrowForwardOutline } from "react-icons/io5"
import Link from "next/link"
import { Box, Button, ButtonBase, Container, Stack } from "@mui/material"
import { usePathname } from "next/navigation"

//data component
import { menuItems } from "./menuData"

//import different modules
import { useOnClickOutside } from "@/utils/use-onclick-outside-hooks"

function Header() {
  //to determine the current path
  const pathname = usePathname()

  // Changing background while scrolling to a certain section of the screen
  const [scroll, setScroll] = useState(false)

  // State for sidebar
  const [openSideBar, setOpenSideBar] = useState(false)

  // State for handling active index
  const [activeIndex, setActiveIndex] = useState(menuItems.findIndex((menu) => menu.path === pathname))

  // Function to toggle the sidebar while clicking outside the sidebar or clicking esc key
  const navRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(navRef, () => setOpenSideBar(false))

  useEffect(() => {
    // Update activeIndex based on the current pathname
    const pathIndex = menuItems.findIndex((menu) => menu.path === pathname)
    setActiveIndex(pathIndex)

    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname]) // Add pathname as a dependency

  // Searching active and setting the color different
  const handleActive = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      <Box
        className={`${scroll ? "!bg-white text-black shadow-md" : "bg-transparent text-white"} ${style.navbar} z-50 fixed top-0 left-0 w-full h-fit`}
        component="header"
      >
        <Container maxWidth={false} disableGutters>
          <div
            className={`items-center flex flex-row justify-between px-4 md:px-8 lg:px-12 xl:px-16  ${scroll ? "text-black" : "text-white"}`}
          >
            <div className="nav-item hidden sm:hidden md:hidden lg:flex xl:flex">
              <Box className={`text-left p-3 ${scroll ? "text-black" : "text-white"}`}>
                {menuItems &&
                  menuItems.map((item, i) => {
                    // Check if this item's path matches the current pathname
                    const isActive = item.path === pathname

                    return (
                      <Link key={i} href={item.path} onClick={() => handleActive(i)} className={`mx-5`}>
                        <ButtonBase
                          className={`gap-x-2 ${isActive ? "text-red-500" : scroll ? "text-black" : "text-white"}`}
                        >
                          {item.title}
                        </ButtonBase>
                      </Link>
                    )
                  })}
              </Box>
            </div>
            <div className="logo">
              <Link href="/" className="flex flex-col justify-center items-center">
                <Image width={100} height={100} src="/Image/logo.png" alt="logo" />
                <div className={`foundation_name ${scroll ? "text-black" : "text-white"}`}>
                  <h2 className={`${style.org_name} font-bold`}>MFKF</h2>
                </div>
              </Link>
            </div>
            <div className="bars">
              <Stack direction="row">
                <Link
                  href="/donate"
                  className={`${style.bar} ${scroll ? "bg-red-500 text-black" : "bg-red-400 text-white"} hover:bg-red-500 mr-2`}
                >
                  <Button className={`!text-white ${style.donate_btn}`}>
                    Donate Now
                    <IoArrowForwardOutline className="ml-1" />
                  </Button>
                </Link>
                <ButtonBase
                  className={`${style.bar_cont} w-7 gap-1 flex flex-col ml-3 ${scroll ? "text-black" : "text-white"}`}
                  onClick={() => setOpenSideBar(true)}
                >
                  <Box className={`${style.ripple1} ${scroll ? "bg-black" : "bg-white"}`}></Box>
                  <Box className={`${style.ripple2} ${scroll ? "bg-black" : "bg-white"}`}></Box>
                  <Box className={`${style.ripple3} ${scroll ? "bg-black" : "bg-white"}`}></Box>
                </ButtonBase>
              </Stack>
            </div>
          </div>
        </Container>
      </Box>
      <div ref={navRef}>
        <SideBar openSideBar={openSideBar} setOpen={setOpenSideBar} />
      </div>
    </>
  )
}

export default Header
