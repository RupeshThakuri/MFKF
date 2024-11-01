"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from "./header.module.css";
import SideBar from "./SideBar";
import { menuItems } from "./menuData";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { Box, Button, ButtonBase, Container, Stack } from "@mui/material";

function Header() {
  //changing background while scroilling to certain  section of the screen
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  //state for handeling active
  const [activeIndex, setActiveIndex] = useState(menuItems.findIndex(menu => menu.active));

  //seraching active and setting the color different
  const handleActive = (index) => {
    setActiveIndex(index)
  }

  // State for sidebar
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <Box
        className={`${scroll ? "!bg-white text-black shadow-md" : "bg-transparent text-white"} ${style.navbar} z-50 fixed top-0 left-0 w-full h-fit`}
        component="header"
      >

        <Container maxWidth={false} disableGutters>
          <div className={`items-center flex flex-row justify-between px-12 ${scroll ? "text-black" : "text-white"}`}>
            <div className="nav-item hidden sm:hidden md:hidden lg:flex xl:flex">
              <Box className={`text-left p-3 ${scroll ? "text-black" : "text-white"}`}>
                {menuItems && menuItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    spy={true}
                    onClick={() => handleActive(i)}
                    smooth={true}
                    duration={500}
                    className={`mx-5`}
                  >
                    <ButtonBase
                      className={`gap-x-2 ${i === activeIndex ? "text-red-500" : scroll ? "text-black" : "text-white"}`}
                    >
                      {item.title}
                    </ButtonBase>
                  </Link>
                ))}
              </Box>
            </div>
            <div className="logo">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-col justify-center items-center"
              >
                <Image width={100} height={100} src="/Image/logo.png" alt="logo" />
                <div className={`foundation_name ${scroll ? "text-black" : "text-white"}`}>
                  <h2 className={`${style.org_name} font-bold`}>MFKF</h2>
                </div>
              </Link>
            </div>
            <div className="bars">
              <Stack direction="row">
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`${style.bar} ${scroll ? "bg-red-500 text-black" : "bg-red-400 text-white"} hover:bg-red-500 mr-2`}
                >
                  <Button className={`${scroll ? "text-black" : "text-white"}`}>
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
      <SideBar openSideBar={openSideBar} setOpen={setOpenSideBar} />
    </>
  );
}

export default Header;
