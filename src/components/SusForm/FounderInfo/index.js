import React, { useState } from "react";

import { BsCheckCircle } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const founder = "/assets/svg/pages/founderInfo/fi_8677126.svg";

import FounderData from "../Common/FounderData";
import { SusTabs } from "../Common/Tabs";

const FounderInfo = ({ founderData, setFounderData }) => {
  const [selectedIndex, setIndex] = useState(0);

  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={founder} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Founder Profile
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      {/* Add Co-Founder */}
      <div
        className="flex px-4 flex-end items-center gap-2 cursor-pointer"
        onClick={() => {
          // setIndex(founderData?.length);
          setFounderData([...founderData, {}]);
        }}
      >
        <RiAddFill color="#CE5511" size="24px" />
        <h1 className="font-inter text-base font-semibold text-primary-dawn-700 underline underline-offset-2">
          Add Co-Founder
        </h1>
      </div>

      {founderData?.length > 0 && (
        <SusTabs
          list={founderData}
          selectedIndex={selectedIndex}
          setIndex={setIndex}
          name="Founder"
        />
      )}

      <FounderData
        data={founderData[selectedIndex] || {}}
        setData={(val) => {
          let temp = [...founderData] || [];
          temp[selectedIndex] = val;
          setFounderData(temp);
        }}
      />
    </div>
  );
};

export default FounderInfo;
