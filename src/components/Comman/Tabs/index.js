import { useEffect, useState, useRef } from "react";
import { classNames } from "helpers/utils/classNames";
import { RadioGroup } from "@headlessui/react";

function Tabs({ tabs, selectedTab, setSelectedTab }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="px-5 lg:px-0 pt-5 pb-2 mb-1.5 relative">
      <div
        className={`flex flex-row items-center ${
          tabs?.length > 2 ? "justify-between" : "justify-center space-x-4"
        } lg:justify-start overflow-x-auto`}
      >
        {tabs.map((item, idx) => {
          return (
            <div
              key={idx}
              id={`selected-${item.value}`}
              ref={(el) => (tabsRef.current[idx] = el)}
              onClick={() => {
                setSelectedTab(item?.value);
                setActiveTabIndex(idx);
              }}
              className="min-w-max"
            >
              <div
                className={`flex px-3 pb-1 flex-row cursor-pointer text-xs lg:text-sm items-end justify-center text-primary-neutral-800 font-lato text-center hover:font-bold ${
                  selectedTab == item?.value ? "font-bold" : "font-normal"
                }`}
              >
                {item?.label}
              </div>
            </div>
          );
        })}
      </div>

      <span
        className="absolute bottom-1 rounded-sm block h-[3px] bg-primary-magenta-dark transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
}

export default Tabs;

function BoxedTabs({ tabs, selectedTab, setSelectedTab }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    if (activeTabIndex !== tabs.findIndex((i) => i?.value == selectedTab)) {
      console.log(
        ":::",
        activeTabIndex,
        selectedTab,
        tabs.findIndex((i) => i?.value == selectedTab)
      );
      setActiveTabIndex(tabs.findIndex((i) => i?.value == selectedTab));
    }
  }, [selectedTab]);

  return (
    <div className="mb-1.5 relative bg-primary-gray-50 px-2 py-1 rounded-lg border border-gray-200 max-w-max">
      <div
        className={`flex flex-row items-center justify-start space-x-4 overflow-x-auto`}
      >
        {tabs.map((item, idx) => {
          return (
            <div
              key={idx}
              id={`selected-${item.value}`}
              onClick={() => {
                setSelectedTab(item?.value);
                setActiveTabIndex(idx);
              }}
              className="min-w-max"
            >
              <div
                className={`flex px-4 text-sm py-2 flex-row cursor-pointer font-karla hover:font-semibold text-center ${
                  selectedTab == item?.value
                    ? "font-medium text-primary-magenta-medium bg-primary-green-30 rounded-lg border border-primary-magenta-medium"
                    : "text-primary-neutral-800 font-light"
                }`}
              >
                {item?.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LongTabs({ tabs, selectedTab, setSelectedTab, radius }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div
      className={`px-5 lg:px-0 py-4 bg-white relative w-full border-b-2 border-primary-neutral-100 ${radius}`}
    >
      <div
        className={`flex flex-row items-center justify-center divide-x-2 divide-primary-neutral-100 overflow-x-auto`}
      >
        {tabs.map((item, idx) => {
          return (
            <div
              key={idx}
              id={`selected-${item.value}`}
              onClick={() => {
                setSelectedTab(item?.value);
                setActiveTabIndex(idx);
              }}
              className="min-w-max px-2"
            >
              <div
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`flex px-4 py-1 flex-row cursor-pointer text-xs lg:text-base items-end justify-center font-poppins text-center hover:text-primary-magenta-medium ${
                  selectedTab == item?.value
                    ? "font-medium text-primary-magenta-medium"
                    : "font-light text-primary-neutral-500"
                }`}
              >
                {item?.label}
              </div>
            </div>
          );
        })}
      </div>

      <span
        className="absolute bottom-4 rounded-sm block h-[2px] bg-primary-magenta-medium transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
}

function RadioTabs({ tabs, selectedTab, setSelectedTab }) {
  return (
    <>
      <RadioGroup
        value={selectedTab}
        onChange={(e) => {
          setSelectedTab(e);
        }}
        className="mt-2"
      >
        <div
          className={`flex flex-row items-center overflow-x-auto -ml-3 -mt-3`}
        >
          {tabs.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option?.value}
              className={({ active, checked }) =>
                classNames(
                  active
                    ? "ring-0 ring-offset-2 ring-primary-green-medium outline-none"
                    : "",
                  option?.value == selectedTab
                    ? "bg-primary-green-lightest font-semibold border-primary-magenta-medium text-primary-magenta-medium "
                    : "bg-primary-gray-50 border-gray-200 text-primary-gray-400 font-light hover:bg-primary-green-lightest",
                  "m-3 min-w-max cursor-pointer border rounded-full px-3 lg:px-6 py-1 lg:py-2 flex items-center justify-center text-xs lg:text-sm font-lato"
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

export { BoxedTabs, LongTabs, RadioTabs };
