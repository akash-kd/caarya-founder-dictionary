import React, { useEffect, useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

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
    <div className="flex py-2 md:px-14 snap-x max-sm:overflow-x-scroll md:justify-center gap-2 items-stretch">
      {tabs.map((item, idx) => {
        return (
          <div
            ref={(el) => (tabsRef.current[idx] = el)}
            key={idx}
            id={`selected-${item.value}`}
            onClick={() => {
              setSelectedTab(item?.value);
              setActiveTabIndex(idx);
            }}
            className={`flex flex-[1_0_0] flex-col max-sm:overflow-x md:flex-row px-2 max-sm:gap-1 py-3 cursor-pointer items-center justify-center snap-center ${
              selectedTab === item?.value
                ? "bg-neutral-50 text-xs sm:text-sm font-light text-neutral-800"
                : "font-medium text-neutral-400 text-xs sm:text-sm"
            }`}
          >
            <img
              src={selectedTab === item?.value ? item.selectedIcon : item.icon}
              alt=""
              className="w-4 h-4 mr-2 object-contain"
            />
            <div className="font-poppins text-sm text-center"></div>
            {item?.label}
          </div>
        );
      })}

      <span
        className="absolute bottom-4 rounded-sm block h-[2px] bg-neutral-800 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
}

export default Tabs;

function SusTabs({ list, setIndex, selectedIndex, name }) {
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
    <div className="flex flex-row py-2 md:px-14 snap-x max-sm:overflow-x-scroll gap-2 items-stretch relative">
      {list.map((item, idx) => {
        return (
          <div
            ref={(el) => (tabsRef.current[idx] = el)}
            key={idx}
            id={`selected-${item.value}`}
            onClick={() => {
              setIndex(idx);
              setActiveTabIndex(idx);
            }}
            className={`flex flex-[1_0_0] flex-col max-sm:overflow-x md:flex-row px-2 max-w-max max-sm:gap-1 py-3 cursor-pointer items-center justify-center snap-center ${
              idx === selectedIndex
                ? "text-xs sm:text-sm font-medium text-neutral-800"
                : "font-light text-neutral-400 text-xs sm:text-sm"
            }`}
          >
            {item?.icon && (
              <img
                src={idx === selectedIndex ? item.selectedIcon : item.icon}
                alt=""
                className="w-4 h-4 mr-2 object-contain"
              />
            )}
            <div className="font-poppins text-sm flex px-2 gap-4 items-center cursor-pointer">
              <h1> {`${name} ${idx + 1}`}</h1>
              <BsCheckCircle color="#33A329" size="20px" />
              <h1 className="font-inter text-right">(0/5)</h1>
            </div>
          </div>
        );
      })}

      <span
        className="absolute bottom-2 rounded-sm block h-[2px] bg-primary-orange-500 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
}

export { SusTabs };
