import React from "react";

import idea from "assets/svg/Idea.svg";
import { ImQuotesRight } from "react-icons/im";
import { MdInsights } from "react-icons/md";
import brownie from "assets/svg/Brownie.svg";

const TextCard = ({ placeholder, titleText, ideaText }) => {
  return (
    <div className="flex max-md:flex-col items-center gap-10 sm:gap-20">
      <div className="flex flex-[1_0_0] w-full flex-col flex-start gap-10">
        <div className="flex flex-col items-center flex-start gap-4">
          <div className="flex items-center gap-4 self-stretch">
            <h1 className="flex text-sm font-inter font-semibold text-neutral-500">
              {titleText}
            </h1>
          </div>
          <input
            placeholder={placeholder}
            className="flex items-start py-3 px-4 rounded border border-neutral-300 self-stretch h-[88px] placeholder:text-sm placeholder:flex placeholder:items-center"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col flex-start gap-4 md:pl-10 md:pt-6 md:pr-6 md:pb-8 ">
        <img src={idea} alt="" className="w-6 h-6" />
        <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
          {ideaText}
        </p>
      </div>
    </div>
  );
};

export default TextCard;