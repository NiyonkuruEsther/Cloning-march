import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Grid() {
  return (
    <Wrapper>
      <div className="sm:w-[64.66667%] justify-between lg:w-auto lg:max-w-[1141.6px] mx-auto flex flex-col lg:flex-row relative pt-6 sm:pt-[72px] sm:pb-[86px] -mb-8 sm:-mb-20 md:mb-32 lg:mb-20">
        <div className="flex-1- mb-6 pt-6 lg:pt-[72px]">
          <h1 className="text-[42px] leading-[59px] font-bold text-gray">
            University of Amsterdam
          </h1>
          <p className="text-[28px] leading-[45px] text-gray">
            Inspiring generations since 1632.
          </p>
        </div>
        <div className="min-h-[1200px]] lg:min-h-[500px] gap-6 relative">
          <div className="bg-neutral-100 absolute inset-0 translate-x-28  -z-50 lg:translate-x-28 translate-y-20"></div>
          <img
            src={
              "https://www.uva.nl/webfiles/1676992405662/includes/home-herobanner-en/img/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpg"
            }
            alt=""
            className="object-cover object-[100%_50%]"
          />
        </div>
        <div className="-translate-y-16 sm:-translate-y-20 md:translate-y-0 md:absolute inset-x-0 -bottom-24 sm:-bottom-10 lg:bottom-[148px] mx-auto lg:mx-0 flex flex-col lg:flex-row gap-3 w-[90%]">
          {[
            {
              title: "Bachelor's",
              text: "20+ English-taught Bachelor's programmes",
            },
            {
              title: "Master's",
              text: "200+ English-taught Master's programmes",
            },
            {
              title: "Professional development",
              text: "MBA's, executive programmes, and master classes",
            },
          ].map((item, i) => {
            return (
              <div
                className="flex-1 font-sans gap-6 lg:max-w-[30%] hover:shadow-small hover:cursor-pointer duration-200 flex items-center bg-white border border-[#bd0032] py-4 px-6 rounded-[3px] justify-between"
                key={i}
              >
                <div className="">
                  <h3 className="text-red font-bold font-sans">{item.title}</h3>
                  <p className="text-[#575757] rounded-[2px]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
