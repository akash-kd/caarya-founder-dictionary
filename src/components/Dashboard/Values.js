import React from "react";
import CardTitle from "./CardTitle";

function ValuesToUphold() {
  return (
    <div className="space-y-4 bg-white rounded-2xl p-4">
      <CardTitle heading="Values to Uphold" />
      <div className="px-4 grid grid-cols-2 lg:flex flex-row flex-wrap justify-center items-stretch gap-8">
        {[
          {
            name: "Adaptability",
            color: "#1A6BE5",
            bgColor: "#E7F9FD",
            image: "/assets/images/icons/values/1.png",
          },
          {
            name: "Continuous Learning",
            color: "#FFBC00",
            bgColor: "#FDF7E9",
            image: "/assets/images/icons/values/2.png",
          },
          {
            name: "Being Inquisitive",
            color: "#2BB656",
            bgColor: "#EDFDDD",
            image: "/assets/images/icons/values/3.png",
          },
          {
            name: "Accountability",
            color: "#6775F5",
            bgColor: "#EBEDF7",
            image: "/assets/images/icons/values/4.png",
          },
          {
            name: "Empathy",
            color: "#E72113",
            bgColor: "#FFE9E5",
            image: "/assets/images/icons/values/5.png",
          },
        ]?.map((item) => {
          return (
            <div
              style={{ color: item?.color }}
              className="flex flex-col items-center space-y-2 max-w-[160px] mx-auto"
            >
              <div
                style={{ background: item?.bgColor }}
                className="rounded-full w-[120px] h-[120px] flex flex-row items-center justify-center"
              >
                <img src={item?.image} alt="" className="w-16 h-16" />
              </div>
              <p className="font-poppins text-center font-medium text-base leading-6 tracking-[0.32px]">
                {item?.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ValuesToUphold;
