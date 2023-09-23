import React, { useEffect, useRef, useState } from "react";

function Tabs({ tabs, selectedTab, setSelectedTab, radius }) {
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
    <div className="flex py-2 px-14 flex-start justify-center gap-2 items-stretch">
      {tabs.map((item, idx) => {
        return (
          <div
            key={idx}
            id={`selected-${item.value}`}
            onClick={() => {
              setSelectedTab(item?.value);
              setActiveTabIndex(idx);
            }}
            className={`flex flex-[1_0_0] px-10 py-3 cursor-pointer items-center justify-center ${
              selectedTab === item?.value
                ? "bg-neutral-50 text-sm border-b-2 border-neutral-800 font-light text-neutral-800"
                : "font-medium text-neutral-400 text-sm"
            }`}
          >
            <img src={item.icon} alt="" className="w-4 h-4 mr-2"/>
            <div
              ref={(el) => (tabsRef.current[idx] = el)}
              className="font-poppins text-sm"
            ></div>
            {item?.label}
          </div>
        );
      })}

      <span
        className="absolute bottom-4 rounded-sm block h-[2px] bg-primary-green-700 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
}

export default Tabs;
