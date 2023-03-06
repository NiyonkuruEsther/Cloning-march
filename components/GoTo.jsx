export default function GoTo() {
  const items = [
    "Alumni",
    "PhD",
    "Working at the UvA",
    "UvA Experts",
    "Staff website",
    "Student website",
  ];
  return (
    <div className="pt-16 pb-24 mx-8 lg:mx-14">
      <h2 className="text-[28px] sm:text-[30px]  leading-[44px] sm:leading-[48px] text-[#1f1d21] font-bold mb-6">
        Go to:
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className=" hover:shadow-med border-[#E6E6E6] text-[22px] sm:text-[24px] leading-[1.15] font-bold rounded-[4px] px-4 pt-4 pb-6 border hover:shadow-medium hover:cursor-pointer hover:text-red hover:underline duration-500"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
