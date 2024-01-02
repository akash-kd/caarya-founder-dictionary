import React, { useEffect, useState } from "react";
import covers from "helpers/constants/drafts";
import { isObjectEmpty } from "helpers/utils/object";

import { useHistory } from "react-router-dom";

function Card({ record }) {
  const history = useHistory();
  const chap1 = JSON.parse(localStorage.getItem("cover-record"));
  const chap2 = JSON.parse(localStorage.getItem("founder-record"));
  const chap3 = JSON.parse(localStorage.getItem("company-record"));
  const chap4 = JSON.parse(localStorage.getItem("viablity-record"));
  const chap5 = JSON.parse(localStorage.getItem("digital-record"));

  let num = 1;
  if (chap2?.founder) num = num + 1;
  if (chap3?.vision) num = num + 1;
  if (chap4?.rev?.city) num = num + 1;
  if (chap5?.linkedin_number) num = num + 1;

  const navigate = () => {
    history.push("/home/drafts/chapterflow");
  };

  const complete = (
    <div className="flex items-center flex-1 grow justify-center relative">
      <div className="bg-primary-magenta-medium rounded-[8px_0px_0px_8px] relative flex-1 grow h-[2px]" />
      <div className="bg-primary-magenta-medium relative w-[8px] h-[8px] rounded-[4px]" />
      <div className="bg-primary-magenta-medium relative flex-1 grow h-[2px]" />
    </div>
  );

  const ongoing = (
    <div className="flex items-center flex-1 grow justify-center relative">
      <div className="bg-primary-magenta-medium relative flex-1 grow h-[2px]" />
      <div className="border border-solid border-primary-magenta-medium relative w-[8px] h-[8px] rounded-[4px]" />
      <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
    </div>
  );

  const diabled = (
    <div className="flex items-center flex-1 grow justify-center relative">
      <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
      <div className="relative w-[8px] h-[8px] bg-neutral-200 rounded-[4px]" />
      <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
    </div>
  );

  return (
    <div
      onClick={navigate}
      className="w-full rounded-2xl p-4 gap-4 bg-white shadow-md cursor-pointer"
    >
      <div className="flex gap-4">
        <img
          className="w-16 h-16"
          src="/assets/svg/pages/drafts/icons/add_logo.svg"
        />
        <div className="flex flex-col justify-start">
          <h1 className="mb-2 font-lato font-semibold text-xl text-neutral-800">
            {record?.name}
          </h1>
          <h1 className="font-lato font-light text-sm">
            {covers[record?.sector]?.name}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-[16px] relative">
        <div className="flex items-start flex-1 grow justify-center relative">
          {chap1?.sector >= 0 ? complete : ongoing}
          {isObjectEmpty(chap2) ? diabled : chap2?.founder ? complete : ongoing}
          {isObjectEmpty(chap3) ? diabled : chap3?.vision ? complete : ongoing}
          {isObjectEmpty(chap4)
            ? diabled
            : chap4?.rev?.city
            ? complete
            : ongoing}
          {isObjectEmpty(chap5)
            ? diabled
            : chap5?.linkedin_number
            ? complete
            : ongoing}
        </div>
        <div className="inline-flex flex-col items-center p-[8px] flex-[0_0_auto] rounded-[192px] justify-center relative">
          <div className="relative w-[18px] h-[18px]">
            <img
              className="absolute w-[18px] h-[17px] top-px left-0"
              src="/assets/svg/pages/drafts/diamond.png"
            />
          </div>
          <div className="relative w-fit font-lato font-semibold text-neutral-500 text-[12px] text-center tracking-[0.60px] leading-[18px] whitespace-nowrap">
            {num}/5
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between relative">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit font-lato font-light text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Created
          </div>
          <div className="font-bold text-3xl text-neutral-500 relative top-[-2px] py-[2px] px-[2px]">
            ·
          </div>
          <div className="relative w-fit font-lato font-semibold text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Oct 12, 2023
          </div>
        </div>
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit font-lato font-light text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Last Edited
          </div>
          <div className="font-bold text-3xl text-neutral-500 relative top-[-2px] py-[2px] px-[2px]">
            ·
          </div>
          <div className="relative w-fit mt-[-1.00px] font-lato font-semibold text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            8h Ago
          </div>
        </div>
      </div>
    </div>
  );
}

const Drafts = () => {
  const [record, setRecord] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cover-record"));

    setRecord(data);
  }, []);

  const chap1 = JSON.parse(localStorage.getItem("cover-record"));
  const chap2 = JSON.parse(localStorage.getItem("founder-record"));
  const chap3 = JSON.parse(localStorage.getItem("company-record"));
  const chap4 = JSON.parse(localStorage.getItem("viablity-record"));
  const chap5 = JSON.parse(localStorage.getItem("digital-record"));

  return (
    <>
      <div className="sticky-thc h-[85vh] lg:h-auto">
        {/* ----- BreadCrumbs  ---- */}
        <p className="px-4 py-2 fonts-inter text-[10px] flex gap-1">
          <span>{">"}</span>
          <span>{"Release"}</span>
          <span className="font-semibold">{">"}</span>
          <span className="font-semibold">{"Products"}</span>
        </p>

        {/* ------ Main Content----- */}
        <div className="p-4 flex flex-col w-full h-full">
          {/* ------ Title ----- */}
          <div className="flex mb-10 w-full h-min justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-satoshi font-bold text-[28px] text-primary-magenta-medium">
                Story Drafts
              </h1>
              <h3 className="font-lato font-light text-sm text-neutral-800 tracking-[0.7px]">
                Page description here
              </h3>
            </div>
            <div></div>
            <img
              className="h-14 w-14"
              src="/assets/svg/pages/drafts/drafts_logo.svg"
            />
          </div>

          {/*------- Main body ------- */}
          <div className="flex flex-col h-full w-full">
            {/* All Record Come Here */}
            {chap1 ? <Card record={record} /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drafts;
