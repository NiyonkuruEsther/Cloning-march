import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import localFont from "@next/font/local";
import { FiChevronDown } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
const Footer = () => {
  const [tabValue, setTabValue] = useState(1);
  const [tabTwo, setTabTwo] = useState(1);
  const [tabThree, setTabThree] = useState(1);
  const [tabFour, setTabFour] = useState(1);

  const index = 1;
  const two = 1;
  const three = 1;
  const four = 1;

  return (
    // desktop
    <>
      <div className="hidden sm:block bg-[#1F1D20] px-2 pt-8 pb-14 border-b border-[#d6d6d6]">
        <div className="max-w-[1400px] mx-auto ">
          <div className="">
            <img src="../assets/logo2.svg" alt="" className="fill-white" />
          </div>
          <div className="grid grid-cols-2 mt-12 md:grid-cols-4 text-white gap-6">
            {[
              {
                title: "Education research",
                link: [
                  "Bachelor's programmes",
                  "minors",
                  "master's programmes",
                  "professionaldevelopment",
                  "exchange",
                  "summerschool",
                  "phdatuva",
                  "researchatuva",
                ],
              },
              {
                title: "Go to",
                link: [
                  "webmailforuvastaff",
                  "webmailuvastudents",
                  "library",
                  "canvas",
                  "sis",
                  "timetable",
                  "coursecatalogue",
                  "vacancies",
                  "uvashopnlmerchandisestore",
                ],
              },
              {
                title: "Information for",
                link: [
                  "prospectivestudents",
                  "currentstudents",
                  "staff",
                  "journalists",
                  "alumni",
                  "donors",
                  "employers",
                  "externalsuppliers",
                ],
              },
              {
                title: "Contact",
                link: [
                  "contactinformation",
                  "locations",
                  "contactstudentservices",
                  "theuvaandsocialmedia",
                ],
              },
            ].map((value, el) => {
              return (
                <div className="card" key={el}>
                  <div className="">
                    <p className={`text-md tracking-wide font-semibold`}>
                      {value.title}
                    </p>
                    <div className="mt-5 space-y-2">
                      {value.link.map((e, idx) => {
                        return (
                          <div key={idx} className="flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white text-lg" />
                            <p className="text-[0.86rem] tracking-wide">{e}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* lower part of icons */}
      <div className="hidden sm:block py-6 bg-gray ">
        <div className="max-w-[1400px] mx-auto sm:flex-col flex justify-between items-center gap-4 md:gap-0 md:flex-row ">
          <div className="flex gap-3 text-[#d6d6d6] px-2">
            {[
              { title: "Copyright UVA 2023", link: "copyright" },
              { title: "About this site", link: "about" },
              { title: "Privacy", link: "privacy" },
              { title: "Cookie settings", link: "cookie" },
            ].map((item, i) => {
              return (
                <p key={i} className="text-[12.48px]">
                  {item.title}
                </p>
              );
            })}
          </div>
          <div className="flex text-[#d6d6d6] md:flex-row gap-2 items-center px-2">
            <div>
              <p className="text-[12.48px]">Follow UVA on social media</p>
            </div>
            <div className="flex items-center space-x-2">
              {[
                <GrFacebookOption key={1} className="text-2xl text-white" />,
                <FaLinkedinIn key={1} className="text-2xl text-white" />,
                <FaTwitter key={1} className="text-2xl text-white" />,
                <AiOutlineWhatsApp key={1} className="text-2xl text-white" />,
                <FaInstagram key={1} className="text-2xl text-white" />,
                <BsYoutube key={1} className="text-2xl text-white" />,
              ].map((item, i) => {
                return <div key={i}>{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* mobo */}
      <div className="bg-gray sm:hidden">
        <div
          className={` px-2 text-white ${sourceSans.variable} font-sourceSans overflow-hidden`}
        >
          {" "}
          <div className="relative overflow-hidden sm:hidden border-t  border-white">
            <div
              onClick={() =>
                tabValue === index + 1
                  ? setTabValue(null)
                  : setTabValue(index + 1)
              }
              className={`flex items-center justify-between py-4`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold">Hello</h3>
              <FiChevronDown
                className={
                  tabValue === index + 1
                    ? " block -rotate-180 transition-all text-white ease-in-out duration-700"
                    : " "
                }
              />
            </div>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  tabValue === index + 1
                    ? " pb-14.21 transition-all ease-in-out duration-700 opacity-100 -top-0 h-fit relative overflow-hidden"
                    : "pb-0 opacity-10 -top-96 h-0 "
                }`}
              >
                <div className="flex flex-col gap-3">
                  {[
                    "Apply to Aalto",
                    "Find a study programme",
                    "How to apply",
                    "Scholarships and tuition fees",
                    "Bachelor's admissions",
                    "Master's admissions",
                    "Doctoral admissions",
                    "Campus life",
                    "Events for applicants",
                    "Chat with students",
                    "Subscribe to newsletter",
                    "Lifewide Learning",
                    "Contact admission services",
                    "Exchange students",
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item}
                      className=" w-fit flex items-center text-sm"
                    >
                      <BsChevronRight size={12} />
                      <p>{item}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:hidden  border-t  border-white">
            <div
              onClick={() =>
                tabTwo === two + 1 ? setTabTwo(null) : setTabTwo(two + 1)
              }
              className={`flex items-center justify-between py-4`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold">Hello</h3>
              <FiChevronDown
                className={
                  tabTwo === two + 1
                    ? " block -rotate-180 transition-all text-white ease-in-out duration-700"
                    : " "
                }
              />
            </div>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  tabTwo === two + 1
                    ? " pb-14.21 transition-all ease-in-out duration-700 opacity-100 -top-0 h-fit relative overflow-hidden"
                    : "pb-0 opacity-10 -top-96 h-0 "
                }`}
              >
                <div className="flex flex-col gap-3">
                  {[
                    "Apply to Aalto",
                    "Find a study programme",
                    "How to apply",
                    "Scholarships and tuition fees",
                    "Bachelor's admissions",
                    "Master's admissions",
                    "Doctoral admissions",
                    "Campus life",
                    "Events for applicants",
                    "Chat with students",
                    "Subscribe to newsletter",
                    "Lifewide Learning",
                    "Contact admission services",
                    "Exchange students",
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item}
                      className=" w-fit flex items-center text-sm"
                    >
                      <BsChevronRight size={12} />
                      <p>{item}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:hidden  border-t  border-white">
            <div
              onClick={() =>
                tabThree === three + 1
                  ? setTabThree(null)
                  : setTabThree(index + 1)
              }
              className={`flex items-center justify-between py-4`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold">Hello</h3>
              <FiChevronDown
                className={
                  tabThree === three + 1
                    ? " block -rotate-180 transition-all text-white ease-in-out duration-700"
                    : " "
                }
              />
            </div>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  tabThree === three + 1
                    ? " pb-14.21 transition-all ease-in-out duration-700 opacity-100 -top-0 h-fit relative overflow-hidden"
                    : "pb-0 opacity-10 -top-96 h-0 "
                }`}
              >
                <div className="flex flex-col gap-3">
                  {[
                    "Apply to Aalto",
                    "Find a study programme",
                    "How to apply",
                    "Scholarships and tuition fees",
                    "Bachelor's admissions",
                    "Master's admissions",
                    "Doctoral admissions",
                    "Campus life",
                    "Events for applicants",
                    "Chat with students",
                    "Subscribe to newsletter",
                    "Lifewide Learning",
                    "Contact admission services",
                    "Exchange students",
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item}
                      className=" w-fit flex items-center text-sm"
                    >
                      <BsChevronRight size={12} />
                      <p>{item}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:hidden  border-t  border-white">
            <div
              onClick={() =>
                tabFour === four + 1 ? setTabFour(null) : setTabFour(four + 1)
              }
              className={`flex items-center justify-between py-4`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold">Hello</h3>
              <FiChevronDown
                className={
                  tabFour === four + 1
                    ? " block -rotate-180 transition-all text-white ease-in-out duration-700"
                    : " "
                }
              />
            </div>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  tabFour === four + 1
                    ? " pb-14.21 transition-all ease-in-out duration-700 opacity-100 -top-0 h-fit relative overflow-hidden"
                    : "pb-0 opacity-10 -top-96 h-0 "
                }`}
              >
                <div className="flex flex-col gap-3">
                  {[
                    "Apply to Aalto",
                    "Find a study programme",
                    "How to apply",
                    "Scholarships and tuition fees",
                    "Bachelor's admissions",
                    "Master's admissions",
                    "Doctoral admissions",
                    "Campus life",
                    "Events for applicants",
                    "Chat with students",
                    "Subscribe to newsletter",
                    "Lifewide Learning",
                    "Contact admission services",
                    "Exchange students",
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item}
                      className=" w-fit flex items-center text-sm"
                    >
                      <BsChevronRight size={12} />
                      <p>{item}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lower part */}
        <div className=" py-6 bg-gray ">
          <div className="max-w-[1400px] mx-auto flex-col flex justify-between items-center gap-4 md:gap-0 md:flex-row ">
            <div>
              <p className="text-[12.48px] text-white">
                Follow UVA on social media
              </p>
            </div>
            <div className="flex text-[#d6d6d6] gap-4 w-full flex-col items-center px-2">
              <div className="flex justify-around w-full items-center ">
                {[
                  <GrFacebookOption key={1} className="text-2xl text-white" />,
                  <FaLinkedinIn key={1} className="text-2xl text-white" />,
                  <FaTwitter key={1} className="text-2xl text-white" />,
                  <AiOutlineWhatsApp key={1} className="text-2xl text-white" />,
                  <FaInstagram key={1} className="text-2xl text-white" />,
                  <BsYoutube key={1} className="text-2xl text-white" />,
                ].map((item, i) => {
                  return <div key={i}>{item}</div>;
                })}
              </div>
              <div className="flex gap-3 text-[#d6d6d6] px-2">
                {[
                  { title: "Copyright UVA 2023", link: "copyright" },
                  { title: "About this site", link: "about" },
                  { title: "Privacy", link: "privacy" },
                  { title: "Cookie settings", link: "cookie" },
                ].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={` whitespace-nowrap text-[12.48px] 
                       
                     `}
                    >
                      {i === 0 ? (
                        <>
                          <p>{item.title}</p>{" "}
                          <br
                            className="sm:hidden
                          "
                          />
                        </>
                      ) : (
                        <p>{item.title}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
