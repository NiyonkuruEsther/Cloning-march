import React, { useEffect, useState } from "react";
import Script from "next/script";
import Wrapper from "./Wrapper";
import localFont from "@next/font/local";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

const sourceSans = localFont({
  src: [
    {
      path: "../public/fonts/sourceSansPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sourceSansPro-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--sourceSans",
});

function handleClick() {
  const navIcons = document.querySelectorAll(
    "#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4"
  );
  navIcons.forEach((icon) => icon.classList.toggle("open"));
}

const Navbar = () => {
  const [tabValue, setTabValue] = useState(0);

  const [scrolled, setScrolled] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [active1, setActiveTwo] = useState(0);
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);

  //   for scroll
  useEffect(() => {
    const changescrolled = () => {
      window.scrollY >= 6
        ? setScrolled(window.scrollY)
        : setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, [scrolled]);
  useEffect(() => {
    const navIcons = document.querySelectorAll(
      "#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4"
    );
    navIcons.forEach((icon) => icon.addEventListener("click", handleClick));

    // Clean up
    return () => {
      navIcons.forEach((icon) =>
        icon.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <div className="text-gray relative ">
      <div className=" z-[9999] shadow-nav inset-x-0 top-0 fixed bg-white w-full">
        <Wrapper styles={""}>
          <div
            className={`flex justify-between items-center  ${
              scrolled < 10
                ? "py-5 transition-all duration-700"
                : "py-2 transition-all duration-700"
            }`}
          >
            <img
              src="../assets/logo.svg"
              alt="logo"
              className={`${
                scrolled < 10 ? "hidden" : "hidden lg:block "
              }  w-8 h-12 `}
            />
            <img
              src="../assets/logo.svg"
              alt="logo"
              className={` sm:hidden w-8 h-12 `}
            />
            {scrolled < 10 && (
              <img
                src="../assets/logo3.svg"
                alt="logo"
                className={`${scrolled < 10 ? "" : ""} hidden lg:block  `}
              />
            )}

            <img
              src="../assets/logo4.svg"
              alt="logo"
              className={` hidden lg:hidden sm:block ${
                scrolled < 10 ? "" : ""
              }`}
            />
            <div
              className={`flex gap-5 ${sourceSans.variable} font-sourceSans font-bold`}
            >
              <div className="flex gap-6">
                <div className="hidden lg:flex items-center border border-neutral-400 h-fit p-2 rounded-md xl:w-[352px] lg:w-fit justify-between">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder:text-gray-500 placeholder:font-normal outline-none
            "
                  />
                  <img
                    src="../assets/search.svg"
                    alt=""
                    className="w-6 h-5 pl-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="whitespace-nowrap hidden md:block">
                    Compare programmes
                  </p>
                  <img src="../assets/heart.svg" alt="" className="w-8 h-8" />
                </div>
              </div>
              <div className="border flex lg:hidden rounded-sm border-black p-2 h-fit">
                {" "}
                <img
                  onClick={() => setTabValue(1)}
                  src="../assets/search.svg"
                  alt=""
                  className="w-7 h-6 pl-1"
                />
              </div>
              <div className="border rounded-sm border-black py-2 px-3 h-fit">
                <p>NL</p>
              </div>
              {/* <Script type="text/javascript" src="../assets/menu.js" /> */}

              <div className="flex gap-4 items-center lg:hidden bg-gray p-2 text-white">
                <p className="hidden md:block">Menu</p>
                <div id="nav-icon3" className="-mt-3 ">
                  <span className="one"></span>
                  <span className="two"></span>
                  <span className="three"></span>
                  <span className="four"></span>
                </div>
              </div>
            </div>
          </div>
          {/* second nav */}
        </Wrapper>
      </div>

      <div
        className={`bg-neutral-100  shadow-lg pt-20 hidden lg:block fixed z-[999] w-full inset-x-0  ${
          scrolled > 10
            ? `-top-40 transition-all duration-700`
            : `top-0 transition-all duration-500`
        } `}
      >
        <div className="flex gap-12 py-4 px-2  max-w-[1400px] mx-auto relative">
          <div
            onMouseEnter={() => setActiveTab(1)}
            onMouseLeave={() => setActiveTab(0)}
            className={`text-xl font-extralight`}
          >
            <p>Education</p>
            {/* dropdown */}
            {activeTab ? (
              <ul className="flex flex-col gap-2 absolute pt-4 z-[100000] cursor-pointer bg-neutral-100 px-10">
                {[
                  "Bachelor's",
                  "Master's",
                  "Professional development",
                  "Summer School",
                  "Open programmes",
                  "Exchange",
                ].map((item, i) => (
                  <li
                    className="flex gap-1 text-[1.25rem] leading-[2rem] hover:underline hover:text-red"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>{" "}
          <div
            onMouseEnter={() => setActive4(1)}
            onMouseLeave={() => setActive4(0)}
            className={`text-xl font-extralight`}
          >
            <p>About The UvA</p>
            {/* dropdown */}
            {active4 ? (
              <ul className="flex flex-col gap-2 absolute pt-4 z-[100000] cursor-pointer bg-neutral-100 px-10">
                {[
                  "Bachelor's",
                  "Master's",
                  "Professional development",
                  "Summer School",
                  "Open programmes",
                  "Exchange",
                ].map((item, i) => (
                  <li
                    className="flex gap-1 text-[1.25rem] leading-[2rem] hover:underline hover:text-red"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>{" "}
          <div
            onMouseEnter={() => setActiveTwo(1)}
            onMouseLeave={() => setActiveTwo(0)}
            className={`text-xl font-extralight`}
          >
            <p>News & Calendar</p>
            {/* dropdown */}
            {active1 ? (
              <ul className="flex flex-col gap-2 absolute pt-4 z-[100000] cursor-pointer bg-neutral-100 px-10">
                {[
                  "Bachelor's",
                  "Master's",
                  "Professional development",
                  "Summer School",
                  "Open programmes",
                  "Exchange",
                ].map((item, i) => (
                  <li
                    className="flex gap-1 text-[1.25rem] leading-[2rem] hover:underline hover:text-red"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>{" "}
          <div
            onMouseEnter={() => setActive3(1)}
            onMouseLeave={() => setActive3(0)}
            className={`text-xl font-extralight`}
          >
            <p>Research</p>
            {/* dropdown */}
            {active3 ? (
              <ul className="flex flex-col gap-2 absolute pt-4 z-[100000] cursor-pointer bg-neutral-100 px-10">
                {[
                  "Bachelor's",
                  "Master's",
                  "Professional development",
                  "Summer School",
                  "Open programmes",
                  "Exchange",
                ].map((item, i) => (
                  <li
                    className="flex gap-1 text-[1.25rem] leading-[2rem] hover:underline hover:text-red"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>{" "}
          <div className={`text-xl font-extralight`}>
            <p>Library</p>
          </div>
        </div>
      </div>

      {/* Search content */}
      <div
        className={
          tabValue
            ? `w-screen text-white border-b border-neutral-300 bg-white fixed mx-auto h-fit transition-all ease-in-out duration-300  inset-x-0 z-[10000000] overflow-hidden ${
                scrolled < 10
                  ? "py-5 transition-all duration-700"
                  : "py-2 transition-all duration-700"
              }`
            : "fixed h-0 bottom-0 overflow-hidden mx-auto"
        }
      >
        <div className="max-w-3xl items-center mx-auto flex w-full justify-between pl-2">
          <div className="border flex justify-between items-center w-full border-neutral-300 rounded-md ring ring-black p-2 flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none"
            />
            <BsSearch className="text-black" />
          </div>

          <div className="flex justify-end px-2">
            <div className="bg-gray p-2">
              <RxCross1
                className={`self-end hover:border w-6 h-6  rounded-full ${
                  tabValue === 1 ? " " : ""
                }`}
                onClick={() => {
                  setTabValue(0);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
