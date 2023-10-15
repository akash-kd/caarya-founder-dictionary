// TODO : Update documentation
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
//Icons
import { CheckIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { classNames } from "helpers/utils/classNames";
//Utils
function FilterDropdown({ value, setValue, list = [], label }) {
  return (
    <>
      <div className={`hidden md:block min-w-max`}>
        <Listbox
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        >
          {({ open }) => (
            <>
              <div className={`relative w-full`}>
                <Listbox.Button className="filter-dropdown-box relative w-full py-1 pl-3.5 pr-10 text-left cursor-default placeholder:text-primary-gray-350 focus:outline-none focus:ring-transparent focus:border-transparent">
                  <span className="block truncate text-primary-neutral-800 inter font-semibold text-sm leading-6 ">
                    {list?.find((e) => e?.value == value)?.label ||
                      label ||
                      "Select..."}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon
                      className="h-5 w-5 text-primary-green-700"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-40 w-full filter-dropdown-box max-h-40 py-1 overflow-auto focus:outline-none">
                    {list?.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-primary-green-700"
                              : "text-primary-neutral-800",
                            "cursor-default select-none relative py-2 pl-4 pr-9 inter font-semibold text-sm leading-6"
                          )
                        }
                        value={item?.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "" : "",
                                "block text-left"
                              )}
                            >
                              {item.label}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active
                                    ? "text-white"
                                    : "text-primary-green-700",
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

      <div className={`md:hidden block min-w-max`}>
        <div className={`relative`}>
          <div className="filter-dropdown-box  relative w-full  text-left cursor-default placeholder:text-primary-gray-350 focus:outline-none focus:ring-transparent focus:border-transparent">
            <select
              value={
                list?.find((e) => e?.value == value)?.label ||
                label ||
                "Select..."
              }
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="block truncate text-primary-neutral-800 border-none outline-none font-lato font-semibold text-sm w-full bg-transparent leading-6 "
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
                    "text-primary-neutral-800 cursor-default select-none relative py-2 pl-4 pr-9 inter font-semibold text-sm leading-6"
                  }
                  value={item?.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterDropdown;
