import React, { useRef, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BLOGS } from "../data/blog";

const Blog = () => {
  const blogSect = useRef(null);
  const blogRef = useRef(0);
  const prevPosition = useRef(0);
  const [blogs, setBlogs] = useState(BLOGS);
  const [position, setPosition] = useState(0);

  const generateInfinite = (e) => {
    setPosition(() => e.target.scrollLeft);
    if (position - prevPosition.current >= 302) {
      prevPosition.current = position;
      setBlogs(() => [...blogs, BLOGS[blogRef.current]]);
      blogRef.current++;
      if (blogRef.current >= BLOGS.length) {
        blogRef.current = 0;
      }
    } else if (
      prevPosition.current - position > 302 &&
      BLOGS.length < blogs.length
    ) {
      prevPosition.current = position;
      blogs.pop();
      setBlogs(() => blogs);
    }
  };
  return (
    <div className="w-screen px-2">
      <div className="flex justify-between items-center mx-auto max-w-[1400px]">
        <p>NEWS</p>
        <div className="flex gap-2 text-neutral-500 pr-4">
          <button
            onClick={() => {
              blogSect.current.scrollLeft += 700;
            }}
          >
            {position === 0 ? <BsChevronRight /> : <BsChevronLeft />}
          </button>
          <button
            onClick={() => {
              blogSect.current.scrollLeft -= 700;
            }}
          >
            {position === 0 ? "" : <BsChevronRight />}
          </button>
        </div>
      </div>

      <div
        ref={blogSect}
        onScroll={generateInfinite}
        className="flex gap-4 overflow-x-scroll scrollbar-hide smooth-scroll ease-in-out duration-300 max-w-full"
      >
        {BLOGS.map((item, i) => {
          return (
            <div key={i} className="">
              <img
                src={item.src}
                alt=""
                className="max-w-6xl w-[250px] object-fill object-center h-24"
              />
              <div>
                <h1>{item.title}</h1>
                <p>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
