import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import localFont from "@next/font/local";

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
const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);
  const [sticky, setSticky] = useState(scrolled);
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

  return (
    <div className="text-gray relative ">
      <div className=" z-[9999] shadow-nav inset-x-0 top-0 fixed bg-white w-full">
        <Wrapper styles={""}>
          <div
            className={`flex justify-between ${
              scrolled > 10 ? "pt-2" : " py-5"
            }`}
          >
            <img
              src="../assets/logo.svg"
              alt="logo"
              className={`${
                scrolled < 10 ? "hidden" : "block"
              } hidden lg:block w-8 h-12`}
            />
            {scrolled < 10 && (
              <img
                src="../assets/logo3.svg"
                alt="logo"
                className="hidden lg:block"
              />
            )}

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
                  <p className="whitespace-nowrap">Compare programmes</p>
                  <img src="../assets/heart.svg" alt="" className="w-8 h-8" />
                </div>
              </div>
              <div className="border flex lg:hidden rounded-sm border-black p-2 h-fit">
                {" "}
                <img
                  src="../assets/search.svg"
                  alt=""
                  className="w-7 h-6 pl-1"
                />
              </div>
              <div className="border rounded-sm border-black py-2 px-3 h-fit">
                <p>NL</p>
              </div>
            </div>
          </div>
          {/* second nav */}
        </Wrapper>
      </div>

      <div className=" bg-neutral-100 shadow-lg pt-20 hidden lg:block">
        <div className="flex gap-12 py-4  px-2  max-w-[1400px] mx-auto">
          {[1, 2, 3, 4, 5].map((item, i) => {
            return (
              <p key={i} className="text-xl font-extralight">
                Education
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
