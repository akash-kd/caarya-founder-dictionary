import { RadioGroup } from "@headlessui/react";

import * as Icons from "@heroicons/react/solid";
import { classNames } from "helpers/utils/classNames";

const HeroIcon = ({ icon }) => {
  const Icon = Icons[icon];
  return (
    <div className="flex-col">
      <Icon className="w-6 h-6 pr-2 rounded-full theme-indigo-500" alt="logo" />
    </div>
  );
};

function ImageRadioInput({
  value,
  setValue,
  valueList,
  labelList,
  label,
  grid = 2,
  lgGrid = 2,
  img,
}) {
  return (
    <RadioGroup
      value={value}
      onChange={(e) => {
        setValue(e);
        // setItem(e);
      }}
      className=""
    >
      <RadioGroup.Label
        className={(!label ? "hidden" : "", "poppins font-medium text-sm")}
      >
        {label}
      </RadioGroup.Label>
      <div
        className={`mt-1.5 grid grid-cols-${grid} gap-2 sm:grid-cols-${lgGrid}`}
      >
        {valueList.map((option, idx) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
            className={({ active, checked }) =>
              classNames(
                active ? "" : "",
                value === option
                  ? "bg-gray-100  text-gray-700 inter hover:bg-theme-indigo-500"
                  : "bg-white  text-gray-900 hover:bg-gray-50",
                "border rounded-md p-2 cursor-pointer flex items-center justify-center text-2xs font-inter font-medium sm:flex-1 hover-on-card"
              )
            }
          >
            {img && img.length > 0 && (
              <>
                {img[idx] && img[idx]?.image ? (
                  <img
                    src={img[idx]?.image}
                    alt="icon"
                    className="w-6 h-6 pr-2"
                  />
                ) : (
                  <HeroIcon icon={img[idx]?.icon} />
                )}
              </>
            )}
            <RadioGroup.Label as="p" className="card-hover-text">
              {labelList[idx]}
            </RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default ImageRadioInput;
