import { useState } from "react";

function OptionsInput({ options, value, onChange, error }) {
  const [selected, setSelected] = useState(value);
  console.log("value:", value, "selected:", selected);
  return (
    <div className="flex flex-col">
      <div className="w-full h-full flex flex-col gap-4">
        {options.map((option, index) => {
          return (
            <div
              onClick={() => {
                if (selected === index) {
                  setSelected(undefined);
                  onChange(undefined, undefined);
                } else {
                  setSelected(index);
                  onChange(option, index);
                }
              }}
              className={`${
                selected === index
                  ? "bg-primary-magenta-30 border-primary-magenta-medium"
                  : ""
              } flex flex-col justify-between items-center h-20 rounded-[20px] border-2 border-neutral-300 hover:cursor-pointer`}
              key={index}
            >
              {selected === index ? (
                <div className="px-3 pt-3 w-full flex justify-end">
                  <div className="flex justify-center items-center h-4 w-4 border-2 border-primary-magenta-medium relative rounded-full">
                    <div className="h-2 w-2 bg-primary-magenta-medium rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div className="px-3 pt-3 w-full flex justify-end">
                  <div className="h-4 w-4 border-[1px] border-neutral-300 relative rounded-full"></div>
                </div>
              )}
              <div className="flex gap-3 justify-center items-center">
                <img src={option.img} />
                <p className="font-inter font-semibold text-sm text-neutral-800">
                  {option.name}
                </p>
              </div>
              <div className="px-3 pt-3">
                <div className="h-4 w-4 border-[1px] border-transparent relative"></div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-red-500 font-lato font-semibold text-xs my-2">
        {error}
      </p>
    </div>
  );
}

export default OptionsInput;
