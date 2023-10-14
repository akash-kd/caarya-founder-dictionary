import React from "react";
const idea = "assets/svg/pages/Idea.svg";

const TextCard = ({
  placeholder,
  titleText,
  ideaText,
  setData,
  data,
  field,
}) => {
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
            value={data[field] || ""}
            onChange={(e) => {
              setData({ ...data, [field]: e.target.value });
            }}
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
