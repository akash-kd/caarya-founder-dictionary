import React from "react";
import CardTitle from "./CardTitle";

function Stats() {
  return (
    <div className="space-y-4">
      <CardTitle heading="This Week" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { name: "Stories Added" },
          { name: "Research Requests" },
          { name: "Initial Submissions" },
          { name: "Complete Research" },
          { name: "Lead Assists" },
        ]?.map((item) => {
          return (
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4">
              <h1 className="flex flex-row items-baseline space-x-2 text-primary-magenta-dark font-inter text-2xl lg:text-[40px] font-semibold lg:leading-[60px] text-center">
                <span>00</span>{" "}
                <span className="text-primary-neutral-500 text-sm font-inter font-light leading-4">
                  /
                </span>
                <span className="text-primary-neutral-500 text-sm font-inter font-light leading-4">
                  00
                </span>
              </h1>
              <p className="text-primary-neutral-500 font-inter text-xs font-light left-5 text-center">
                {item?.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;
