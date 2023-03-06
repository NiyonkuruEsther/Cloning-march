import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Current() {
  const items = [
    {
      img: "https://www.uva.nl/binaries/_ht_1621425616851/cardmedium/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/trap-stairs-roeterseiland.jpg",
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "Discover everything an international student needs to know about studying at the UvA.",
    },
    {
      img: "https://www.uva.nl/binaries/_ht_1674056828979/680x190-webp/content/gallery/onderzoek/uva-corporate/impact-stories/de-slimme-stad-donker-2.png",
      title: "The UvA and the smart city",
      text: "Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential.",
    },
    {
      img: "https://www.uva.nl/binaries/_ht_1674029674329/680x190-webp/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg",
      title: "Study in Amsterdam Week 20 - 24 February",
      text: "Discover everything an international student needs to know about studying at the UvA.",
    },
  ];
  return (
    <Wrapper styles="pb-16 ">
      <h2 className="text-[28px] sm:text-[30px] leading-[44px] sm:leading-[48px] text-[#1f1d21] font-bold mb-6">
        Current
      </h2>
      <div className="flex flex-col sm:flex-row gap-[1.5rem]">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className="flex-1 rounded-[4px] h-fit border hover:shadow-med border-[#E6E6E6] hover:shadow-medium hover:cursor-pointer duration-200 group"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover h-[170px] w-full"
                />
              </div>
              <div className="py-6 px-4">
                <h3 className="text-[#1f1d21] font-bold text-[1.375rem] leading-[25px] sm:leading-[27px] sm:text-[1.5rem] mb-3 group-hover:text-red group-hover:underline decoration-1 underline-offset-[3px] duration-200">
                  {item.title}
                </h3>
                <p className="leading-[25.6px] text-[#1f1d21]">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
