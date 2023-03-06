import React, { useRef } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BLOGS } from "../data/blog";

const Blog = () => {
  const blogSect = useRef(null);

  const scrollRight = () => {
    blogSect.current.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    blogSect.current.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen px-2 bg-[#E6E6E6] pt-16">
      <div className="flex justify-between items-center mx-auto max-w-[1400px]">
        <p className=" text-[28px] sm:text-[30px]  leading-[44px] sm:leading-[48px] text-[#1f1d21] font-bold">
          NEWS
        </p>
        <div className="flex gap-2 text-neutral-500 pr-4">
          <button onClick={scrollRight}>
            <BsChevronLeft />
          </button>
          <button onClick={scrollLeft}>
            <BsChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={blogSect}
        className="flex gap-1 ease-in-out duration-500 max-w-full overflow-x-hidden"
      >
        {BLOGS.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[247px] md:max-w-[434px] hover:shadow-medium hover:cursor-pointer duration-500 group max-h-[460px] pb-8 mb-10 min-[470px]:w-[60%] sm:w-[45%] lg:w-[26%] flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white"
            >
              <div className="">
                <img
                  src={item.src}
                  alt=""
                  className="h-[143px] object-center object-cover w-full"
                />
              </div>
              <div className="px-2 mt-5">
                <h3 className="text-[#1f1d21] font-bold text-[1.375rem] group-hover:text-red group-hover:underline decoration-1 underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] mb-3">
                  {item.title}
                </h3>
                <p className="leading-[25.6px] text-[#1f1d21]">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
