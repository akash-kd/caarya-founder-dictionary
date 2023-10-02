import React from "react";

import { BsFlagFill } from "react-icons/bs";

const SusCheckRadioCard = ({ list, data, onCheck, field }) => {
  return (
    <div className="flex max-sm:flex-col flex-start gap-4">
      {list?.map((item) => {
        return (
          <div
            onClick={() => {
              onCheck(item?.value);
            }}
            className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative"
          >
            <div className="flex flex-1 items-center justify-center gap-3">
              <BsFlagFill
                size="20px"
                color={
                  item?.flag == "green"
                    ? "#33A329"
                    : item?.flag == "red"
                    ? "#FB6F60"
                    : "#E7E6E5"
                }
              />
              <h1 className="font-inter text-sm font-semibold text-neutral-800">
                {item?.label}
              </h1>
            </div>
            <input
              checked={item?.value == (data && data[field]?.value)}
              type="radio"
              className="absolute right-[8.33px] top-[8px] w-4 h-4"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SusCheckRadioCard;
