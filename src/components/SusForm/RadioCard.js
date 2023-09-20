import React from "react";

import { BsFlagFill } from "react-icons/bs";

const RadioCard = ({card1,card2,card3}) => {
  return (
    <div className="flex flex-start gap-4">
      <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
        <div className="flex flex-1 items-center justify-center gap-3">
          <BsFlagFill size="20px" color="#33A329" />
          <h1 className="font-inter text-sm font-semibold text-neutral-800">
            {card1}
          </h1>
        </div>
        <input
          type="radio"
          className="absolute right-[8.33px] top-[8px] w-4 h-4"
        />
      </div>
      <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
        <div className="flex flex-1 items-center justify-center gap-3">
          <BsFlagFill size="20px" color="#E7E6E5" />
          <h1 className="font-inter text-sm font-semibold text-neutral-800">
            {card2}
          </h1>
        </div>
        <input
          type="radio"
          className="absolute right-[8.33px] top-[8px] w-4 h-4"
        />
      </div>
      <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
        <div className="flex flex-1 items-center justify-center gap-3">
          <BsFlagFill size="20px" color="#FB6F60" />
          <h1 className="font-inter text-sm font-semibold text-neutral-800">
            {card3}
          </h1>
        </div>
        <input
          type="radio"
          className="absolute right-[8.33px] top-[8px] w-4 h-4"
        />
      </div>
    </div>
  );
};

export default RadioCard;
