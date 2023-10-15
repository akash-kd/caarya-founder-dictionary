import React from "react";
import CardTitle from "./CardTitle";

function YourTeam() {
  return (
    <div className="space-y-4 bg-white rounded-2xl p-4">
      <CardTitle heading="Your Team" />
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            name: "Adaptability",
            role: "Role",
            designation: "designation",
            image: "/assets/images/icons/values/1.png",
          },
          {
            name: "Continuous Learning",
            role: "Role",
            designation: "designation",
            image: "/assets/images/icons/values/2.png",
          },
          {
            name: "Being Inquisitive",
            role: "Role",
            designation: "designation",
            image: "/assets/images/icons/values/3.png",
          },
          {
            name: "Accountability",
            role: "Role",
            designation: "designation",
            image: "/assets/images/icons/values/4.png",
          },
          {
            name: "Empathy",
            role: "Role",
            designation: "designation",
            image: "/assets/images/icons/values/5.png",
          },
        ]?.map((item) => {
          return (
            <div className="flex flex-row items-start space-x-4 p-4 bg-primary-neutral-50 rounded-lg shadow">
              <img
                src={item?.image}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />

              <div className="flex flex-col items-start">
                <p className="font-poppins font-medium text-base leading-6 tracking-[0.3px] text-primary-magenta-dark">
                  {item?.name}
                </p>
                <p className="font-inter font-light text-xs leading-5 tracking-[0.24px] text-primary-neutral-800">
                  {item?.role}
                </p>
                <p className="font-inter font-light text-xs leading-5 tracking-[0.2px] text-primary-neutral-800">
                  {item?.designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourTeam;
