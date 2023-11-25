// TODO : Update documentation
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
//Icons
import { CheckIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { classNames } from "helpers/utils/classNames";
//Utils

/**
 * Dropdown Input field for changing values in an object
 * @param { String } label
 * @param { String } field - Key in the details oject
 * @param { Object } details - Object containing the details of the entity
 * @param { Function } setValue - Function to changed the value of the given field in details object
 * @param { Boolean } srOnly - To display the label or not
 * @param { [ { label,value } ] } list - To display all options
 * @param { Boolean } required - to set the field as required
 * @returns
 */
export default function StatusDropdown({
  label,
  value,
  setValue,
  list,
  srOnly = false,
  isDisabled,
  showError,
  required = false,
  errorMessage = "Please select one",
  horizontal,
  colorList,
}) {
  return (
    <>
      <div
        className={`${
          horizontal ? `flex flex-row items-center space-x-4` : "md:block"
        }`}
      >
        <Listbox
          disabled={isDisabled}
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        >
          {({ open }) => (
            <>
              <div className="flex flex-col items-start">
                <label
                  htmlFor={label}
                  className={srOnly ? "sr-only" : "input-label"}
                >
                  {required ? label + "*" : label}
                </label>
              </div>
              <div className={`relative ${horizontal ? "w-8/12" : "w-full"}`}>
                <Listbox.Button className="input-dropdown-box relative w-full py-1 pl-3.5 pr-10 text-left cursor-default placeholder:text-primary-gray-350 focus:outline-none focus:ring-transparent focus:border-transparent">
                  <span className="flex flex-row items-center space-x-2 truncate font-inter text-sm font-semibold text-primary-gray-600 inter font-normal text-xs leading-6 ">
                    {label == "Status" && (
                      <span className="text-primary-gray-400 font-inter text-3xs lg:text-sm font-semibold">
                        Status:
                      </span>
                    )}
                    <span
                      className={` font-inter text-3xs lg:text-sm font-semibold ${
                        colorList
                          ? colorList[list?.findIndex((e) => e?.value == value)]
                          : ""
                      }`}
                    >
                      {list?.find((e) => e?.value == value)?.label ||
                        label ||
                        "Select..."}
                    </span>
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon
                      className="h-5 w-5 text-primary-green-700"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                {showError && !value && (
                  <p className="text-alert text-2xs flex flex-row items-center mt-1 ml-0.5">
                    {errorMessage}
                  </p>
                )}
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-40 w-full input-dropdown-box max-h-40 py-1 overflow-auto focus:outline-none">
                    {list?.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active ? "" : "text-primary-gray-600",
                            "cursor-default select-none relative py-1 lg:py-2 pl-4 pr-9 font-inter font-normal text-3xs lg:text-xs leading-6"
                          )
                        }
                        value={item?.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                colorList ? `${colorList[index]}` : "",
                                "block text-left"
                              )}
                            >
                              {item.label}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "" : "text-primary-green-700",
                                  "absolute inset-y-0 right-0 flex items-center pr-2.5"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>

      {/* <div className={`md:hidden block`}>
        <label htmlFor={label} className={srOnly ? "sr-only" : "input-label"}>
          {required ? label + "*" : label}
        </label>
        <div className={`relative`}>
          <div className="input-dropdown-box  relative w-full  text-left cursor-default placeholder:text-primary-gray-350 focus:outline-none focus:ring-transparent focus:border-transparent">
            <select
              value={
                list?.find((e) => e?.value == value)?.label ||
                label ||
                "Select..."
              }
              disabled={isDisabled}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="block truncate text-primary-gray-600 border-none outline-none font-inter font-normal text-xs w-full bg-transparent leading-6 "
            >
              <option>
                {list?.find((e) => e?.value == value)?.label ||
                  label ||
                  "Select..."}
              </option>
              {list?.map((item, index) => (
                <option
                  key={index}
                  className={
                    "text-primary-gray-600 cursor-default select-none relative py-2 pl-4 pr-9 inter font-normal text-xs leading-6"
                  }
                  value={item?.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          {showError && !value && (
            <p className="text-alert text-2xs flex flex-row items-center mt-1 ml-0.5">
              {errorMessage}
            </p>
          )}
        </div>
      </div> */}
    </>
  );
}
