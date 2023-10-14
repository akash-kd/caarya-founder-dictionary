import React from "react";

const OnlinePresence = ({
  title,
  presence,
  placeholder,
  field,
  data,
  setData,
}) => {
  return (
    <div className="flex flex-col flex-start gap-4">
      <h1 className="font-inter text-sm font-semibold text-neutral-500">
        {title}
      </h1>

      <div className="flex flex-start justify-between">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="text-[#F57D34] focus:ring-[#F57D34] w-4 h-4"
          />
          <p className="text-xs font-inter font-light text-neutral-800">
            Has a {presence}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="text-[#F57D34] focus:ring-[#F57D34] w-4 h-4"
          />
          <p className="text-xs font-inter font-light text-neutral-800">
            Does not have a {presence}
          </p>
        </div>
      </div>

      <input
        placeholder={placeholder}
        value={data[field] || ""}
        onChange={(e) => {
          setData({ ...data, [field]: e.target.value });
        }}
        className="flex px-4 py-3 gap-2 md:min-w-[420px] border border-neutral-300 rounded-lg items-center placeholder:font-light placeholder:text-sm placeholder:font-inter"
      />
    </div>
  );
};

export default OnlinePresence;
