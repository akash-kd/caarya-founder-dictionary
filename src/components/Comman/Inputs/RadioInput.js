import { classNames } from "helpers/utils/classNames";
import { RadioGroup } from "@headlessui/react";

function RadioInput({
  value,
  setValue,
  list,
  label = "",
  srOnly,
  minItems = 2,
}) {
  return (
    <>
      <RadioGroup
        value={value}
        onChange={(e) => {
          console.log(e);
          setValue(e);
          // setItem(e);
        }}
        className="mt-2"
      >
        <RadioGroup.Label className={srOnly ? "sr-only" : "input-label"}>
          {label}
        </RadioGroup.Label>
        <div className={`mt-1.5 grid grid-cols-${minItems} gap-3`}>
          {list.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option?.value}
              className={({ active, checked }) =>
                classNames(
                  active
                    ? "ring-0 ring-offset-2 ring-primary-green-medium"
                    : "",
                  option?.value == value
                    ? "bg-primary-green-lightest font-semibold border-primary-green-700 text-primary-green-700 "
                    : "bg-primary-gray-50 border-gray-200 text-primary-gray-400 font-light hover:bg-primary-green-lightest",
                  "border rounded-full px-6 py-2 flex items-center justify-center text-sm font-inter sm:flex-1"
                )
              }
            >
              <RadioGroup.Label as="p">{option.label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}

export default RadioInput;
