import React from "react";

import idea from "assets/svg/Idea.svg";
import { ImQuotesRight } from "react-icons/im";
import { MdInsights } from "react-icons/md";
import brownie from "assets/svg/Brownie.svg";

const InsightsCard = ({ placeholder, ideaText, vis = true }) => {
  return (
    <div className="flex max-md:flex-col items-center gap-10 sm:gap-20">
      <div className="flex flex-[1_0_0] w-full flex-col flex-start gap-10">
        <div className="flex flex-col items-center flex-start gap-4">
          <div className="flex items-center gap-4 self-stretch">
            <ImQuotesRight size="20px" color="#D8F3D7" />
            <h1 className="flex flex-1 text-sm font-inter font-semibold text-neutral-500">
              Cite Your Sources
            </h1>
            <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
              <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                ?
              </h1>
            </div>
          </div>
          <input
            placeholder="Add source link here"
            className="flex py-3 px-4 rounded-lg border border-neutral-300 self-stretch"
          />
        </div>
        <div className="flex flex-col items-center flex-start gap-4">
          <div className="flex items-center gap-4 self-stretch">
            <MdInsights size="20px" color="#8DA1FC" />
            <h1 className="flex text-sm font-inter font-semibold text-neutral-500">
              Researcher Insight
            </h1>
            <div className="flex flex-1 px-2 gap-1 items-center">
              <img src={brownie} alt="" className="w-4 h-4" />
              <h1 className="font-inter text-xs font-semibold text-[#FFBC00]">
                +1
              </h1>
            </div>
            <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
              <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                ?
              </h1>
            </div>
          </div>
          <input
            placeholder={placeholder}
            className="flex items-start py-3 px-4 rounded border border-neutral-300 self-stretch h-[88px] placeholder:text-sm placeholder:flex placeholder:items-center"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col flex-start gap-4 pl-10 pt-6 pr-6 pb-8 grad">
        <img src={idea} alt="" className="w-6 h-6" />
        <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
          {ideaText}
        </p>
      </div>
    </div>
  );
};

export default InsightsCard;
